import { NgModule } from '@angular/core';

import { SharedModule }       from '../shared/shared.module';
import { AboutRoutingModule } from './about-routing.module';
import { DisqusModule }       from '../disqus/disqus.module';

import { AboutComponent } from './about.component';

@NgModule({
    imports: [
        SharedModule,
        AboutRoutingModule,
        DisqusModule
    ],
    declarations: [
        AboutComponent
    ]
})
export class AboutModule {}