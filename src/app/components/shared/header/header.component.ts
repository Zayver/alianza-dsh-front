import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideMenu, lucideShoppingCart, lucideUsers } from '@ng-icons/lucide';

@Component({
  selector: 'alianzadsh-header',
  imports: [NgIconComponent, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  providers: [provideIcons({lucideUsers, lucideShoppingCart, lucideMenu})]
})
export class HeaderComponent {
  readonly navigation = [
    {path: "", icon: "lucideUsers"},
    {path: "", icon: "lucideShoppingCart"},
    {path: "", icon: "lucideMenu"},
  ]
}
