import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: ()=> import('@components/shared/main/main.component').then(m => m.MainComponent)},
    {path: 'about-us', loadComponent: ()=> import('@components/shared/about-us/about-us.component').then((m) => m.AboutUsComponent) },
];
