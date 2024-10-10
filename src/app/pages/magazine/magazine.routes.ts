import { Route } from "@angular/router";

export const magazineRoutes: Route[] = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'overview'
    },
    {
        path: 'overview',
        loadComponent: () => import('./overview/overview.component').then(m => m.OverviewComponent)
    },
    {
        path: 'issues',
        loadComponent: () => import('./issues/issues.component').then(m => m.IssuesComponent)
    },
    {
        path: 'articles',
        loadComponent: () => import('./articles/articles.component').then(m => m.ArticlesComponent)
    },
    {
        path: 'volunteers',
        loadComponent: () => import('./volunteers/volunteers.component').then(m => m.VolunteersComponent)
    }
]