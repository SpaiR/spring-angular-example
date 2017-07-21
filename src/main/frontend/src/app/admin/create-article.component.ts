import { Component } from '@angular/core';
import { Router }    from '@angular/router';

import { ArticleService } from '../article/article.service';
import { Article }        from '../article/article';

@Component({
    templateUrl: './create-article.component.html',
    styles: [ `mdl-textfield { width: 100% }` ]
})
export class CreateArticleComponent {

    article: Article = new Article();

    constructor(
        private articleService: ArticleService,
        private router: Router
    ) {}

    create(): void {
        this.articleService.create(this.article)
            .subscribe(() => this.router.navigate(['/admin']));
    }
}