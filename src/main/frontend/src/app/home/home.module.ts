import { NgModule } from '@angular/core';

import { SharedModule }      from '../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';

import { HomeComponent }        from './home.component';
import { PreviewCardComponent } from './preview/preview-card.component';

@NgModule({
    imports: [
        SharedModule,
        HomeRoutingModule
    ],
    declarations: [
        HomeComponent,
        PreviewCardComponent
    ]
})
export class HomeModule {}