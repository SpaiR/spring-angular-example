import { NgModule }                from '@angular/core';
import { BrowserModule }           from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule }        from '@angular/common/http';

import { CookieModule } from 'ngx-cookie';

import { AppComponent }         from './app.component';
import { AppRoutingModule }     from './app-routing.module';
import { AppInterceptorModule } from './app-interceptor.module';

import { CoreModule }   from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { HomeModule }   from './home/home.module';

@NgModule({
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        HttpClientModule,

        CookieModule.forRoot(),

        AppInterceptorModule,
        CoreModule,
        SharedModule,
        HomeModule,

        AppRoutingModule
    ],
    declarations: [ AppComponent ],
    bootstrap:    [ AppComponent ]
})
export class AppModule {}