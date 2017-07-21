import { Injectable } from '@angular/core';

import {
    Router, Resolve, RouterStateSnapshot, ActivatedRouteSnapshot
} from '@angular/router';

import { ArticleService } from './article.service';
import { Article }        from './article';

@Injectable()
export class ArticleResolver implements Resolve<Article> {

    constructor(
        private articleService: ArticleService,
        private router: Router
    ) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<Article> {
        const id = route.paramMap.get('id');
        return this.articleService.getById(id).toPromise()
            .then(article => { return article })
            .catch(() => {
                this.router.navigate(['/home']);
                return null;
            });
    };
}