import { Component, OnInit } from '@angular/core';

import { AboutService }    from '../about/about.service';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
    templateUrl: './edit-about.component.html',
    styles: [ `mdl-textfield { width: 100% }` ]
})
export class EditAboutComponent implements OnInit{

    aboutText: string = "";

    constructor(
        private aboutService: AboutService,
        private snackbarService: SnackbarService
    ) {}

    ngOnInit(): void {
        this.aboutService.get().subscribe(aboutText => this.aboutText = aboutText);
    }

    save(): void {
        this.aboutService.update(this.aboutText)
            .subscribe(() => this.snackbarService.showToast('About text saved'));
    }
}