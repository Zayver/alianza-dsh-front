import { Routes } from '@angular/router';

export const routes: Routes = [
    {path: '', loadComponent: ()=> import('@components/shared/main/main.component').then(m => m.MainComponent) }
];
