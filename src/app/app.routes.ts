import { Routes } from '@angular/router';

import { AuthGuard } from './core/guards/auth.guard';
import { UsersComponent } from './pages/users/users.component';
import { LoginComponent } from './pages/login/login.component';
import { PortalComponent } from './pages/portal/portal.component';
import { magazineRoutes } from './pages/magazine/magazine.routes';
import { MagazineComponent } from './pages/magazine/magazine.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'portal',
        component: PortalComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                pathMatch: 'full',
                redirectTo: 'dashboard',
            },
            {
                path: 'dashboard',
                component: DashboardComponent,
            },
            {
                path: 'magazine',
                component: MagazineComponent,
                children: magazineRoutes
            },
            {
                path: 'users',
                component: UsersComponent,
            }
        ]
    }

];
