import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AboutService {

    constructor(private http: HttpClient) {}

    get(): Observable<string> {
        return this.http.get('/api/about', { responseType: 'text' });
    }

    update(newText: string): Observable<any> {
        return this.http.post('/api/about', newText);
    }
}