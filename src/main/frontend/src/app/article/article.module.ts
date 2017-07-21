import { NgModule } from '@angular/core';

import { SharedModule }         from '../shared/shared.module';
import { ArticleRoutingModule } from './article-routing.module';
import { DisqusModule }         from '../disqus/disqus.module';

import { ArticleComponent }      from './article.component';
import { ArticleImageComponent } from './article-image.component';

@NgModule({
    imports: [
        SharedModule,
        ArticleRoutingModule,
        DisqusModule
    ],
    declarations: [
        ArticleComponent,
        ArticleImageComponent
    ]
})
export class ArticleModule{}