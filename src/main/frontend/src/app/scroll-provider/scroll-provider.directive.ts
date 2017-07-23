import { Directive, ElementRef, HostListener } from '@angular/core';

import { ScrollProviderService } from './scroll-provider.service';

@Directive({
    selector: '[scroll-provider]'
})
export class ScrollProviderDirective {

    constructor(
        private scrollProviderService: ScrollProviderService,
        elementRef: ElementRef
    ) {
        this.scrollProviderService.scrollElementRef = elementRef;
    }

    @HostListener('scroll', ['$event'])
    onScroll($event: Event) {
        this.scrollProviderService.catchScrollEvent($event);
    }
}