import { ElementRef, Injectable } from '@angular/core';

import { Subject }    from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ContentScrollService {

    layoutRef: ElementRef;
    private scrollEventSubject: Subject<Event>;
    private scrollEventObservable: Observable<Event>;

    constructor() {
        this.scrollEventSubject = new Subject();
        this.scrollEventObservable = this.scrollEventSubject.asObservable();
    }

    catchScrollEvent(event: Event) {
        this.scrollEventSubject.next(event);
    }

    getScrollEvent(): Observable<Event> {
        return this.scrollEventObservable;
    }
}