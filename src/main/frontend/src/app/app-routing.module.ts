import { NgModule }                                from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { AuthGuardService } from './auth/auth-guard.service';

const appRoutes: Routes = [
    {
        path: 'articles/:id',
        loadChildren: './article/article.module#ArticleModule'
    },
    {
        path: 'about',
        loadChildren: './about/about.module#AboutModule'
    },
    {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
    },
    {
        path: 'admin',
        loadChildren: './admin/admin.module#AdminModule',
        canLoad: [ AuthGuardService ]
    },
    { path: '**', pathMatch: 'full', redirectTo: '/home' }
];

@NgModule({
    imports: [RouterModule.forRoot(
        appRoutes,
        {
            preloadingStrategy: PreloadAllModules
        }
    )],
    exports: [ RouterModule ]
})
export class AppRoutingModule {}