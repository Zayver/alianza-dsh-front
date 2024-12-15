import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideMenu, lucideShoppingCart, lucideUsers } from '@ng-icons/lucide';
import { Popover } from 'primeng/popover';

@Component({
  selector: 'alianzadsh-header',
  imports: [NgIconComponent, RouterLink, Popover],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [provideIcons({lucideUsers, lucideShoppingCart, lucideMenu})]
})
export class HeaderComponent {

  readonly subNavigation = [
    {path: 'contact', name: 'Contáctanos'},
    {path: 'products', name: 'Productos'},
    {path: 'about-us', name: 'Quiénes somos'},
    {path: '', name: 'Nuestros clientes'},
  ]
}
