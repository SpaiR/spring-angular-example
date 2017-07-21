import { NgModule }    from '@angular/core';
import { FormsModule } from '@angular/forms';

import { SharedModule }       from '../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';

import { AdminComponent }          from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { EditArticleComponent }    from './edit-article.component';
import { CreateArticleComponent }  from './create-article.component';
import { EditAboutComponent }      from './edit-about.component';

@NgModule({
    imports: [
        SharedModule,
        AdminRoutingModule,
        FormsModule
    ],
    declarations: [
        AdminComponent,
        AdminDashboardComponent,
        EditArticleComponent,
        CreateArticleComponent,
        EditAboutComponent
    ]
})
export class AdminModule {}