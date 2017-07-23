import { NgModule } from '@angular/core';

import { SnackbarModule } from '../snackbar/snackbar.module';

import { PreviewService }   from '../home/preview/preview.service';
import { ArticleService }   from '../article/article.service';
import { AuthGuardService } from '../auth/auth-guard.service';
import { AuthService }      from '../auth/auth.service';
import { AboutService }     from '../about/about.service';

@NgModule({
    imports: [ SnackbarModule ],
    exports: [ SnackbarModule ],
    providers: [
        PreviewService,
        ArticleService,
        AuthGuardService,
        AuthService,
        AboutService
    ]
})
export class CoreModule {}