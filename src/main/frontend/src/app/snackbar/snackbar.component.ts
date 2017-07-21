import { Component, OnInit } from '@angular/core';

import { Observable }   from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';

import { SnackbarService } from './snackbar.service';

@Component({
    selector: 'snackbar',
    template: `
<div class="mdl-snackbar" style="z-index: 999;" [ngClass]="{'mdl-snackbar--active': isVisible }">
  <div class="mdl-snackbar__text">{{message}}</div>
</div>
`
})
export class SnackbarComponent implements OnInit {

    message: string;
    isVisible: boolean = false;

    private timer: Subscription;

    constructor(private snackbarService: SnackbarService) {}

    ngOnInit() {
        this.snackbarService.setSnackbarComponent(this);
    }

    showToast(message: string) {
        if (this.isVisible) {
            this.timer.unsubscribe();
            this.isVisible = false;
            setTimeout(() => this.showToast(message), 250);
        } else {
            this.message = message;
            this.isVisible = true;
            this.timer = Observable.timer(2500).first()
                .subscribe(() => {
                    this.isVisible = false;
                }
            );
        }
    }
}