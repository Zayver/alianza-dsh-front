import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('@components/shared/main/main.component').then(m => m.MainComponent),
        title: 'Inicio | Alianza DSH',
        children: [
            { path: 'contact', title: 'Contáctanos | Alianza DSH', loadComponent: () => import('@components/contactus/contactus.component').then(m => m.ContactusComponent)},
            { path: 'products', title: 'Productos | Alianza DSH', loadComponent: () => import('@components/products/products.component').then(m => m.ProductsComponent) },
            { path: '**', loadComponent: ()=> import('@components/shared/e404/e404.component').then(m => m.E404Component)},
        ]
    }
];
