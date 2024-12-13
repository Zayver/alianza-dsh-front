import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: ()=> import('@components/shared/header/header.component').then(m => m.HeaderComponent) },
    {path: 'about-us', loadComponent: ()=> import('@components/shared/about-us/about-us.component').then((m) => m.AboutUsComponent) },
];
