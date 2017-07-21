import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { MdlModule }    from '@angular-mdl/core';

import { NotProvidedDirective } from './not-provided.directive';

@NgModule({
    imports: [
        CommonModule,
        MdlModule
    ],
    declarations: [
        NotProvidedDirective
    ],
    exports: [
        CommonModule,
        MdlModule,
        NotProvidedDirective
    ]
})
export class SharedModule {}