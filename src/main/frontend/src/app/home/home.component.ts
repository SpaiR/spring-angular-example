import { Component, OnInit, OnDestroy, } from '@angular/core';

import {
    trigger, style, animate, transition
} from '@angular/animations';

import { Preview }         from './preview/preview';
import { PreviewService }  from './preview/preview.service';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
    templateUrl: './home.component.html',
    styleUrls: [ './home.component.scss' ],
    animations: [
        trigger('visiblePreview', [
            transition(':enter', [
                style({opacity: '0'}),
                animate(200)
            ]),
            transition(':leave', [
                animate(200, style({opacity: '0'}))
            ])
        ])
    ]
})
export class HomeComponent implements OnInit, OnDestroy {

    previews: Preview[];
    showLoadMoreButton: boolean = false;
    loadingProcess: boolean = false;

    private defaultPreviewsOnPage: number = 6;
    private currentPreviewsOnPage: number = 0;

    constructor(
        private previewService: PreviewService,
        private snackbarService: SnackbarService
    ) {}

    ngOnInit(): void {
        if (this.previewService.previewCache.length == 0) {
            this.loadingProcess = true;

            this.getPreviews().then(previews => {
                this.previews = previews;
                this.showLoadMoreButton = true;
                this.loadingProcess = false;
                this.changeCurrentPreviewsOnPage();
            })
        } else {
            this.showLoadMoreButton = true;
            this.previews = this.previewService.previewCache;
            this.currentPreviewsOnPage = this.previews.length;
        }
    }

    ngOnDestroy(): void {}

    loadMorePreviews(): void {
        const loadedPreviews: Promise<Preview[]> = this.getPreviews();

        this.showLoadMoreButton = false;
        this.loadingProcess = true;

        loadedPreviews.then(loadedPreview => {
            this.loadingProcess = false;
            this.changeCurrentPreviewsOnPage();

            if (loadedPreview.length > 0) {
                this.previews = this.previews.concat(loadedPreview);
            }

            if (loadedPreview.length == 0 || loadedPreview.length < this.defaultPreviewsOnPage) {
                this.snackbarService.showToast('No additional articles available');
            } else {
                this.showLoadMoreButton = true;
            }
        });
    }

    private getPreviews(): Promise<Preview[]> {
        return this.previewService.getLastInRange(
            this.currentPreviewsOnPage, this.defaultPreviewsOnPage
        ).toPromise();
    }

    private changeCurrentPreviewsOnPage(): void {
        this.currentPreviewsOnPage += this.defaultPreviewsOnPage;
    }
}
