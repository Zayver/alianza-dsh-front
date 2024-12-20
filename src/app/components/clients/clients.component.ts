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
      name: 'Sector Salud',
      icon: '/images/clients/category/health-care.png', 
      companies: [
        { name: 'CUNIT', logo: 'assets/logos/cunit.png' },
        { name: 'Zenu', logo: 'assets/logos/zenu.png' },
      ],
    },
    {
      name: 'AutoServicios / Supermercados',
      icon: '/images/clients/category/shopping-cart.png',
      companies: [
        { name: 'Ranchera', logo: 'assets/logos/ranchera.png' },
        { name: 'Rica', logo: 'assets/logos/rica.png' },
      ],
    },
    {
      name: 'Comercializadoras / Distribuidoras',
      icon: '/images/clients/category/order-fulfillment.png',
      companies: [
        { name: 'Pietran', logo: 'assets/logos/pietran.png' },
      ],
    },
    {
      name: 'Produccion / Fabricacion servicios',
      icon: '/images/clients/category/factory.png',
      companies: [
        { name: 'Hermo', logo: 'assets/logos/hermo.png' },
      ],
    },
  ];

  selectedCompanies: any[] = [];

  // Función para manejar la selección de categorías
  onCategorySelect(companies: any[]): void {
    this.selectedCompanies = companies;
  }
}


