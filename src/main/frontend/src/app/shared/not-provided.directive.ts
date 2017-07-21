import { Directive, HostListener } from '@angular/core';

import { SnackbarService } from '../snackbar/snackbar.service';

@Directive({
    selector: '[not-provided]'
})
export class NotProvidedDirective {

    constructor(private snackbarService: SnackbarService) {}

    @HostListener('click', ['$event']) onClick($event: Event): void {
        $event.preventDefault();
        this.snackbarService.showToast('Option not provided');
    }
}