import { Component, OnInit }              from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { ArticleService }  from '../article/article.service';
import { Article }         from '../article/article';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
    templateUrl: './edit-article.component.html',
    styles: [ `mdl-textfield { width: 100% }` ]
})
export class EditArticleComponent implements OnInit {

    article: Article = new Article();

    constructor(
        private route: ActivatedRoute,
        private articleService: ArticleService,
        private router: Router,
        private snackbarService: SnackbarService
    ) {}

    ngOnInit(): void {
        this.route.params
            .switchMap((params: Params) => this.articleService.getById(+params['id']))
            .subscribe((article: Article) => {
                this.article = article;
            });
    }

    save(): void {
        this.articleService.update(this.article)
            .subscribe(() => this.snackbarService.showToast('Article ['+ this.article.id +'] updated'));
    }

    remove(): void {
        this.articleService.deleteById(this.article.id)
            .subscribe(() => {
            this.router.navigate(['/admin']);
            this.snackbarService.showToast('Article \'' + this.article.title + '\' [' + this.article.id + '] deleted');
        });
    }
}