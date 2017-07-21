import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable }    from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';

import { AuthData } from './auth-data';

@Injectable()
export class AuthService {

    private loggedIn: boolean = false;
    redirectUrl: string = null;

    constructor(
        private cookieService: CookieService,
        private http: HttpClient
    ) {}

    isLoggedIn(): boolean | Promise<boolean> {
        return this.loggedIn || this.getLoginStatus();
    }

    login(authData: AuthData): Observable<any> {
        return this.http.post('/api/login', authData, { observe: 'response' })
            .do(response => {
                const authToken = response.headers.get('Authorization');
                this.cookieService.put('access_token', authToken, { expires: this.getCurrentDatePlusHour() });
                this.loggedIn = true;
            });
    }

    logout(): void {
        this.loggedIn = false;
        this.cookieService.remove('access_token');
    }

    private getLoginStatus(): Promise<boolean> | boolean {
        if (this.cookieService.get('access_token')) {
            return this.http.get('/api/login/check').toPromise()
                .then(() => {
                    this.loggedIn = true;
                    return true;
                })
                .catch(() => {
                    this.cookieService.remove('access_token');
                    return false;
                });
        } else {
            return false;
        }
    }

    private getCurrentDatePlusHour(hour?: number): Date {
        const currentDate: Date = new Date();
        currentDate.setHours(currentDate.getHours() + (hour ? hour : 1));
        return currentDate;
    }
}