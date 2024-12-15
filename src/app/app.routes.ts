import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '', loadComponent: () => import('@components/shared/main/main.component').then(m => m.MainComponent),
        title: 'Inicio | Alianza DSH',
        children: [
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'contact', title: 'Contáctanos | Alianza DSH', loadComponent: () => import('@components/contactus/contactus.component').then(m => m.ContactusComponent) },
            { path: 'products', title: 'Productos | Alianza DSH', loadComponent: () => import('@components/products/products.component').then(m => m.ProductsComponent) },
            { path: 'about-us', title: 'Quienes somos | Alianza DSH', loadComponent: ()=> import('@components/aboutus/aboutus.component').then((m) => m.AboutusComponent) },
            { path: 'home', title: 'Inicio | Alianza DSH', loadComponent: ()=> import('@components/home/home.component').then(m => m.HomeComponent) },
            { path: '**', loadComponent: ()=> import('@components/shared/e404/e404.component').then(m => m.E404Component)},

        ]
    }
];
