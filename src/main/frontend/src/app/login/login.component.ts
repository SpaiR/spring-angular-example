import { Component, OnInit, OnDestroy }       from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router }                             from '@angular/router';

import { componentDestroyed } from 'ng2-rx-componentdestroyed';

import { AuthService }     from '../auth/auth.service';
import { SnackbarService } from '../snackbar/snackbar.service';

@Component({
    templateUrl: './login.component.html',
    styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit, OnDestroy {

    form: FormGroup = null;
    loginInProcess: boolean = false;

    constructor(
        private formBuilder: FormBuilder,
        private authService: AuthService,
        private snackbarService: SnackbarService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.form = this.formBuilder.group({
            'username': ['', Validators.required ],
            'password': ['', Validators.required ]
        });
    }

    ngOnDestroy(): void {}

    onSubmit(): void {
        this.loginInProcess = true;

        this.authService.login(this.form.value)
            .takeUntil(componentDestroyed(this))
            .subscribe(() => {
            if (this.authService.isLoggedIn()) {
                if (this.authService.redirectUrl) {
                    this.router.navigate([ this.authService.redirectUrl ]);
                } else {
                    this.router.navigate(['/admin']);
                }
            }
        }, () => {
            this.form.reset();
            this.snackbarService.showToast('Rejected');
            this.loginInProcess = false;
        });
    }
}