import { NgModule }          from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthRequestInterceptor } from './auth/auth-request-interceptor.service';

@NgModule({
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthRequestInterceptor,
            multi: true
        }
    ]
})
export class AppInterceptorModule {}
