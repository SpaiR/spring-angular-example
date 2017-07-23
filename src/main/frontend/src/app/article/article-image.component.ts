import { Component, Input, OnInit, OnDestroy } from '@angular/core';

import {
    trigger, style, animate, transition
} from '@angular/animations';

import { componentDestroyed } from 'ng2-rx-componentdestroyed';

import { ScrollProviderService } from '../scroll-provider/scroll-provider.service';

@Component({
    selector: 'article-image',
    template: `<div class="article-image" 
                    [@flyIn]="true"
                    [style.background-image]="'url('+ imageLink +')'"
                    [style.transform]="'translate3d(0, ' + offsetValue + 'px, 0)'"
                    [style.background-position-y]="offsetValue / 25 + 'px'"></div>`,
    styleUrls: [ './article-image.component.scss' ],
    animations: [
        trigger('flyIn', [
            transition(':enter', [
                style({opacity: '0'}),
                animate('150ms 50ms')
            ]),
            transition(':leave', [
                animate(200, style({opacity: '0'}))
            ])
        ])
    ]
})
export class ArticleImageComponent implements OnInit, OnDestroy {

    @Input() imageLink: string;

    offsetValue: number = 0;

    constructor(private scrollProviderService: ScrollProviderService) {}

    ngOnInit(): void {
        this.scrollProviderService.scrollEventObservable
            .takeUntil(componentDestroyed(this))
            .subscribe(event => this.onScroll(event));
    }

    ngOnDestroy(): void {}

    private onScroll(event: Event): void {
        this.offsetValue = event.srcElement.scrollTop * 0.85;
    }
}