import { Component, AfterViewInit } from '@angular/core';

@Component({
    selector: 'app',
    templateUrl: './app.component.html',
    styleUrls: [ './app.component.scss' ]
})
export class AppComponent implements AfterViewInit {

    private mainLayoutRef: any;

    onRouterDeactivate(): void {
        this.mainLayoutRef.scrollTop = 0;
    }

    ngAfterViewInit(): void {
        this.mainLayoutRef = document.getElementById('main-layout-content');
    }
}