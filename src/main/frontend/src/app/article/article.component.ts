import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute }               from '@angular/router';
import { Title }                        from '@angular/platform-browser';

import {
    trigger, style, animate, transition
} from '@angular/animations';

import { Article } from './article';

@Component({
    templateUrl: './article.component.html',
    styleUrls: [ './article.component.scss' ],
    animations: [
        trigger('flyInContent', [
            transition(':enter', [
                style({
                    transform: 'translateY(30%)',
                    opacity: '0'
                }),
                animate(250)
            ]),
            transition(':leave', [
                animate(200, style({opacity: '0'}))
            ])
        ])
    ]
})
export class ArticleComponent implements OnInit, OnDestroy {

    article: Article = new Article();

    constructor(
        private route: ActivatedRoute,
        private title: Title
    ) {}

    ngOnInit(): void {
        this.route.data
            .subscribe((data: { article: Article }) => {
                this.article = data.article;
                this.title.setTitle(this.article.title);
            });
    }

    ngOnDestroy(): void {
        this.title.setTitle('LOOK\'N\'TALK');
    }

    thumbUp(): void {
        this.article.likes++;
    }
}