import { Component } from '@angular/core';

import { AuthService } from '../auth/auth.service';

@Component({
    templateUrl: './admin.component.html',
    styleUrls: [ './admin.component.scss' ]
})
export class AdminComponent {

    constructor(private authService: AuthService) {}

    logOut(): void {
        this.authService.logout();
    }
}