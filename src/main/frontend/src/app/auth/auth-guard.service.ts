import { Injectable } from '@angular/core';

import {
    ActivatedRouteSnapshot, CanActivate, CanLoad, Router, Route, RouterStateSnapshot
} from '@angular/router';

import { Observable } from 'rxjs/Observable';

import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {

    constructor(
        private authService: AuthService,
        private router: Router
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const redirectUrl: string = state.url;
        return this.checkLogin(redirectUrl);
    }

    canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
        const url = `/${route.path}`;
        return this.checkLogin(url);
    }

    private checkLogin(redirectUrl: string): boolean {
        if (this.authService.isLoggedIn()) {
            return true;
        } else {
            this.authService.redirectUrl = redirectUrl;
            this.router.navigate(['/login']);
            return false;
        }
    }
}