import { ElementRef, Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

@Injectable()
export class ScrollProviderService {

    scrollElementRef: ElementRef;
    scrollEventObservable: Observable<Event>;

    private scrollEventSubject: Subject<Event> = new Subject();

    constructor() {
        this.scrollEventObservable = this.scrollEventSubject.asObservable();
    }

    catchScrollEvent(event: Event) {
        this.scrollEventSubject.next(event);
    }
}