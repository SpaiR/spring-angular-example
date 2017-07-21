import { Component, OnInit } from '@angular/core';

import { Observable } from 'rxjs/Observable';

import { PreviewService } from '../home/preview/preview.service';
import { Preview }        from '../home/preview/preview';

@Component({
    templateUrl: './admin-dashboard.component.html'
})
export class AdminDashboardComponent implements OnInit{

    previews: Observable<Preview[]>;

    constructor(private previewService: PreviewService) {}

    ngOnInit(): void {
        this.previews = this.previewService.getAll();
    }
}