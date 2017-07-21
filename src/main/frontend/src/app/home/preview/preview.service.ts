import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Preview } from './preview';

@Injectable()
export class PreviewService {

    previewCache: Preview[] = [];

    constructor(private http: HttpClient) {}

    getLastInRange(start: number, limit: number): Observable<Preview[]> {
        return this.http.get<Preview[]>('/api/previews/range', {
            params: new HttpParams().set('start', start.toString()).set('limit', limit.toString())
        }).do(previews => this.previewCache = this.previewCache.concat(previews));
    }

    getAll(): Observable<Preview[]> {
        return this.http.get<Preview[]>('/api/previews');
    }
}