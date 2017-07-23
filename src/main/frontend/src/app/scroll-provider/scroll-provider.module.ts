import { NgModule } from '@angular/core';

import { ScrollProviderService }   from './scroll-provider.service';
import { ScrollProviderDirective } from './scroll-provider.directive';

@NgModule({
    declarations: [ ScrollProviderDirective ],
    exports: [ ScrollProviderDirective ],
    providers: [ ScrollProviderService ],
})
export class ScrollProviderModule {}
