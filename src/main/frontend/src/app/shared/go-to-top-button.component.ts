import { Component, OnInit, OnDestroy }        from '@angular/core';
import { trigger, style, animate, transition } from '@angular/animations';

import { componentDestroyed } from 'ng2-rx-componentdestroyed';
import { Observable }         from 'rxjs/Observable';

import { ScrollProviderService } from '../scroll-provider/scroll-provider.service';

@Component({
    selector: 'go-to-top-button',
    template: `
      <button *ngIf="showButton" [@visible]="showButton" 
              mdl-button  mdl-button-type="fab" mdl-colored="primary" mdl-ripple mdl-tooltip-large="Scroll Up" mdl-tooltip-position="left"
              (click)="scrollToTop()">
        <mdl-icon>keyboard_arrow_up</mdl-icon>
      </button>`,
    styles: [`        
        button {
            z-index: 10;
            position: fixed;
            right: 45px;
            bottom: 35px;
        }
    `],
    animations: [
        trigger('visible', [
            transition(':enter', [
                style({transform: 'scale(0, 0)'}),
                animate(120)
            ]),
            transition(':leave', [
                animate(120, style({transform: 'scale(0, 0)'}))
            ])
        ])
    ]
})
export class GoToTopButtonComponent implements OnInit, OnDestroy {

    showButton: boolean = false;

    constructor(private scrollProviderService: ScrollProviderService) {}

    ngOnInit() {
        this.scrollProviderService.scrollEventObservable
            .takeUntil(componentDestroyed(this))
            .subscribe(event => this.onScroll(event));
    }

    ngOnDestroy(): void {}

    scrollToTop(): void {
        const el: any = this.scrollProviderService.scrollElementRef.nativeElement;
        Observable.interval(5).takeWhile(() => el.scrollTop > 0)
            .subscribe(() => el.scrollTop -= this.getScrollSpeed(el.scrollTop));
    }

    onScroll(event: Event): void {
        this.showButton = event.srcElement.scrollTop > 200;
    }

    private getScrollSpeed(currentScrollTop: number): number {
        const scrollTop = currentScrollTop;
        let speed = 10;

        if (scrollTop > 1200) {
            speed = 40;
        } else if (scrollTop > 400) {
            speed = 20;
        }

        return speed;
    }
}