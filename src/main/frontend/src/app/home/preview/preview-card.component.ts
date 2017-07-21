import { Component, Input } from '@angular/core';

import { Preview } from './preview';

@Component({
    selector: 'preview-card',
    templateUrl: './preview-card.component.html',
    styleUrls: [ './preview-card.component.scss' ]
})
export class PreviewCardComponent {

    @Input() preview: Preview = null;
}