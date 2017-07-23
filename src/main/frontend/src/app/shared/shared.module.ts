import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MdlModule }    from '@angular-mdl/core';

import { NotProvidedDirective   } from './not-provided.directive';
import { GoToTopButtonComponent } from './go-to-top-button.component';

@NgModule({
    imports: [
        CommonModule,
        MdlModule
    ],
    declarations: [
        NotProvidedDirective,
        GoToTopButtonComponent
    ],
    exports: [
        CommonModule,
        MdlModule,
        NotProvidedDirective,
        GoToTopButtonComponent
    ]
})
export class SharedModule {}