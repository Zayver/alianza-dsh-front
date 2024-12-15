import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgIconComponent, provideIcons } from '@ng-icons/core';
import { lucideBoxes, lucideLayers, lucideCable } from '@ng-icons/lucide';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [NgIconComponent, CommonModule], 
  providers: [provideIcons({ lucideBoxes, lucideLayers, lucideCable })],
})
export class HomeComponent {
  team = [
    {
      name: 'Juan Pérez',
      role: 'Director General',
      contact: 'juan.perez@email.com',
      imageUrl: 'images/home/profile_home.jpg',
    },
    {
      name: 'María López',
      role: 'Gerente de Proyectos',
      contact: 'maria.lopez@email.com',
      imageUrl: 'images/home/profile_home2.jpg',
    },
    {
      name: 'Carlos Gómez',
      role: 'Coordinador Técnico',
      contact: 'carlos.gomez@email.com',
      imageUrl: 'images/home/profile_home3.jpg',
    },
  ];
}
