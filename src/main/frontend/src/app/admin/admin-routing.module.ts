import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from '../auth/auth-guard.service';

import { AdminComponent }          from './admin.component';
import { AdminDashboardComponent } from './admin-dashboard.component';
import { EditArticleComponent }    from './edit-article.component';
import { CreateArticleComponent }  from './create-article.component';
import { EditAboutComponent }      from './edit-about.component';

const adminRoutes: Routes = [
    {
        path: '',
        canActivate: [ AuthGuardService ],
        component: AdminComponent,
        children: [
            { path: '', component: AdminDashboardComponent },
            { path: 'about', component: EditAboutComponent },
            { path: 'articles/new', component: CreateArticleComponent },
            { path: 'articles/:id', component: EditArticleComponent }
        ]
    },
];

@NgModule({
    imports: [ RouterModule.forChild(adminRoutes) ],
    exports: [ RouterModule ]
})
export class AdminRoutingModule {}