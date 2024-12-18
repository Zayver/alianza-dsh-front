import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'alianzadsh-clients',
  imports: [CommonModule, ButtonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss'
})
export class ClientsComponent {

  categories = [
    {
      name: 'Carnicos',
      icon: 'pi pi-fw pi-circle', // Ícono de PrimeIcons
      companies: [
        { name: 'CUNIT', logo: 'assets/logos/cunit.png' },
        { name: 'Zenu', logo: 'assets/logos/zenu.png' },
      ],
    },
    {
      name: 'Galletas',
      icon: 'pi pi-fw pi-star',
      companies: [
        { name: 'Ranchera', logo: 'assets/logos/ranchera.png' },
        { name: 'Rica', logo: 'assets/logos/rica.png' },
      ],
    },
    {
      name: 'Chocolates',
      icon: 'pi pi-fw pi-bookmark',
      companies: [
        { name: 'Pietran', logo: 'assets/logos/pietran.png' },
      ],
    },
    {
      name: 'Cafe',
      icon: 'pi pi-fw pi-coffee',
      companies: [
        { name: 'Hermo', logo: 'assets/logos/hermo.png' },
      ],
    },
    {
      name: 'Alimentos al Consumidor',
      icon: 'pi pi-fw pi-apple',
      companies: [
        { name: 'Blue Ribbon', logo: 'assets/logos/blue-ribbon.png' },
      ],
    },
    {
      name: 'Helados',
      icon: 'pi pi-fw pi-ice-cream',
      companies: [
        { name: 'Berard', logo: 'assets/logos/berard.png' },
      ],
    },
  ];

  selectedCompanies: any[] = [];

  // Función para manejar la selección de categorías
  onCategorySelect(companies: any[]): void {
    this.selectedCompanies = companies;
  }
}


