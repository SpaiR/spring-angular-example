import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticleComponent } from './article.component';
import { ArticleResolver }  from './article-resolver.service';

const articleRoutes: Routes = [
    {
        path: '',
        component: ArticleComponent,
        resolve: {
            article: ArticleResolver
        }
    }
];

@NgModule({
    imports: [ RouterModule.forChild(articleRoutes) ],
    exports: [ RouterModule ],
    providers: [ ArticleResolver ]
})
export class ArticleRoutingModule {}