import { NgModule }     from '@angular/core';
import { CommonModule } from '@angular/common';

import { SnackbarService } from './snackbar.service';
import { SnackbarComponent } from './snackbar.component';

@NgModule({
    imports: [ CommonModule ],
    exports: [ SnackbarComponent ],
    declarations: [ SnackbarComponent ],
    providers: [ SnackbarService ],
})
export class SnackbarModule {}
