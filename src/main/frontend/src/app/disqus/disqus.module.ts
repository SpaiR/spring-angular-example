import { NgModule } from '@angular/core';

import { DisqusComponent } from './disqus.component';

@NgModule({
    declarations: [
        DisqusComponent
    ],
    exports: [
        DisqusComponent
    ]
})
export class DisqusModule {}