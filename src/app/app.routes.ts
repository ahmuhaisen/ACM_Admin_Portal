import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { MagazineComponent } from './pages/magazine/magazine.component';
import { magazineRoutes } from './pages/magazine/magazine.routes';

export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'magazine',
        component: MagazineComponent,
        children: magazineRoutes
    },
    {
        path: 'users',
        component: UsersComponent
    },
];
