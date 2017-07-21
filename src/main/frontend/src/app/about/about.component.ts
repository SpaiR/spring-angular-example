import { Component, OnInit } from '@angular/core';

import {
    trigger, style, animate, transition
} from '@angular/animations';

import { AboutService } from './about.service';

@Component({
    templateUrl: './about.component.html',
    styleUrls: [ './about.component.scss' ],
    animations: [
        trigger('flyInContent', [
            transition(':enter', [
                style({
                    transform: 'translateY(30%)',
                    opacity: '0'
                }),
                animate(250)
            ]),
            transition(':leave', [
                animate(200, style({opacity: '0'}))
            ])
        ])
    ]
})
export class AboutComponent implements OnInit {

    aboutText: string = 'Loading \'about\' text...';

    constructor(private aboutService: AboutService) {}

    ngOnInit(): void {
        this.aboutService.get().subscribe(aboutText => this.aboutText = aboutText);
    }
}