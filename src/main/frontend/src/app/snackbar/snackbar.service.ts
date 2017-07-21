import { Injectable } from '@angular/core';

import { SnackbarComponent } from './snackbar.component';

@Injectable()
export class SnackbarService {

    private snackbarComponent: SnackbarComponent;

    showToast(message: string): void {
        this.snackbarComponent.showToast(message);
    }

    setSnackbarComponent(snackbarComponent: SnackbarComponent): void {
        this.snackbarComponent = snackbarComponent;
    }
}