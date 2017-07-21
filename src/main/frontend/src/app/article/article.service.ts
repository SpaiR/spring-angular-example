import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import { Article } from './article';

@Injectable()
export class ArticleService {

    constructor(private http: HttpClient) {}

    getById(id: number | string): Observable<Article> {
        return this.http.get<Article>('/api/articles/' + id);
    }

    update(article: Article): Observable<any> {
        return this.http.put('/api/articles/' + article.id, article);
    }

    create(article: Article): Observable<any> {
        return this.http.post('/api/articles', article);
    }

    deleteById(id: number | string): Observable<any> {
        return this.http.delete('/api/articles/' + id);
    }
}