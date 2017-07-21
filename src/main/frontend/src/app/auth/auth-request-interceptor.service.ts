import { Injectable } from '@angular/core';

import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable }    from 'rxjs/Observable';
import { CookieService } from 'ngx-cookie';

@Injectable()
export class AuthRequestInterceptor implements HttpInterceptor {

    constructor(private cookieService: CookieService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const authToken = this.cookieService.get('access_token');

        if (authToken) {
            const reqWithHeader = req.clone({ setHeaders: { Authorization: authToken } });
            return next.handle(reqWithHeader);
        }

        return next.handle(req);
    }
}