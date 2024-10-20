import { Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { UsersComponent } from './pages/users/users.component';
import { MagazineComponent } from './pages/magazine/magazine.component';
import { magazineRoutes } from './pages/magazine/magazine.routes';
import { LoginComponent } from './pages/login/login.component';
import { AuthGuard } from './core/guards/auth.guard';
export const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'magazine',
        component: MagazineComponent,
        canActivate: [AuthGuard],
        children: magazineRoutes
    },
    {
        path: 'users',
        component: UsersComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'login',
        component: LoginComponent
    }

];
