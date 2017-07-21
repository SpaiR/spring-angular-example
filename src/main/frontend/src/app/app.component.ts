import { Component, AfterViewInit, ViewChild } from '@angular/core';

import { ContentScrollService } from './core/content-scroll.service';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements AfterViewInit{

    @ViewChild('mainLayout') mainLayoutRef: any;

    constructor(private contentScrollService: ContentScrollService) {}

    ngAfterViewInit(): void {
        this.contentScrollService.layoutRef = this.mainLayoutRef.elRef;
    }

    onRouterDeactivate(): void {
        this.mainLayoutRef.elRef.nativeElement.scrollTop = 0;
    }

    provideScrollEvent(event: Event) {
        this.contentScrollService.catchScrollEvent(event);
    }
}