import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'alianzadsh-clients',
  imports: [CommonModule, ButtonModule],
  templateUrl: './clients.component.html',
  styleUrl: './clients.component.scss',
})
export class ClientsComponent {
  categories = [
    {
      name: 'Sector Salud',
      icon: '/images/clients/category/salud.png',
      companies: [
        {
          name: 'ORBIDENTAL',
          logo: '/images/clients/client/SECTOR SALUD/LOGO ORBIDENTAL.png',
        },
        {
          name: 'Medicox',
          logo: '/images/clients/client/SECTOR SALUD/LogoMedicox.png',
        },
        {
          name: 'microdent',
          logo: '/images/clients/client/SECTOR SALUD/microdent.jpg',
        },
      ],
    },
    {
      name: 'AutoServicios / Supermercados',
      icon: '/images/clients/category/carrito-de-compras.png',
      companies: [
        {
          name: 'Arca',
          logo: '/images/clients/client/AUTOSERVICIOS SUPERMERCADOS/Logo Arca.png',
        },
        {
          name: 'Eco',
          logo: '/images/clients/client/AUTOSERVICIOS SUPERMERCADOS/LOGO ECO.png',
        },
        {
          name: 'Guavio',
          logo: '/images/clients/client/AUTOSERVICIOS SUPERMERCADOS/LogoGuavio.jpg',
        },
        {
          name: 'Max',
          logo: '/images/clients/client/AUTOSERVICIOS SUPERMERCADOS/LogoMax.jpg',
        },
        {
          name: 'Parada',
          logo: '/images/clients/client/AUTOSERVICIOS SUPERMERCADOS/LogoMegamarcas.png',
        },
        {
          name: 'Megamarcas',
          logo: '/images/clients/client/AUTOSERVICIOS SUPERMERCADOS/LogoParada.png',
        },
      ],
    },
    {
      name: 'Comercializadoras / Distribuidoras',
      icon: '/images/clients/category/order-fulfillment.png',
      companies: [
        {
          name: 'Andinos',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/Logo Andinos.jpg',
        },
        {
          name: 'Concentrados',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/Logo Concentrados.png',
        },
        {
          name: 'Girardot',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/Logo Girardot.png',
        },
        {
          name: 'La Favorita',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/logo la favorita.png',
        },
        {
          name: 'Merkaunion',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/LOGO MERKAUNION.jpeg',
        },
        {
          name: 'North Trade',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/LOGO NORTH TRADE.jpg',
        },
        {
          name: 'Pintunorte',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/Logo Pintunorte.png',
        },
        {
          name: 'Megapets',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/logo-megapetsm.webp',
        },
        {
          name: 'Amp',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/LogoAmp.jpg',
        },
        {
          name: 'Animalcity',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/LogoAnimalcity.bmp',
        },
        {
          name: 'Diamante',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/LogoDiamante.bmp',
        },
        {
          name: 'Distriofertas',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/LogoDistriofertas.jpeg',
        },
        {
          name: 'El Granero',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/LogoElgranero.jpg',
        },
        {
          name: 'Fuenteweb',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/LOGOFUENTEWEB.png',
        },
        {
          name: 'Hiper Center Maestro',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/LogoHiper Center Maestro.bmp',
        },
        {
          name: 'Surtiplast',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/LogoSurtiplast.bmp',
        },
        {
          name: 'Viveres',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/LogoViveres.png',
        },
        {
          name: 'Provemarks',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/provemarks.bmp',
        },
        {
          name: 'Chiki',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/LogoSanJoseJ&M.jpg',
        },
        {
          name: 'SanJoseJ&M',
          logo: '/images/clients/client/COMERCIALIZADORAS DISTRIBUIDORAS/LogoChiki.jpg',
        },
      ],
    },
    {
      name: 'Produccion / Fabricacion ',
      icon: '/images/clients/category/factory.png',
      companies: [
        {
          name: 'Tornirap',
          logo: '/images/clients/client/PRODUCCION FABRICACION/Logo Tornirap.jpg',
        },
        {
          name: 'Ariztor',
          logo: '/images/clients/client/PRODUCCION FABRICACION/LogoAriztor.jpg',
        },
        {
          name: 'Aytex',
          logo: '/images/clients/client/PRODUCCION FABRICACION/LogoAytex.png',
        },
        {
          name: 'Bemtt',
          logo: '/images/clients/client/PRODUCCION FABRICACION/LogoBemtto.png',
        },
        {
          name: 'Pintunorte',
          logo: '/images/clients/client/PRODUCCION FABRICACION/LogoPintunorte.bmp',
        },
        {
          name: 'Turbos',
          logo: '/images/clients/client/PRODUCCION FABRICACION/Logoturbos.bmp',
        },
        {
          name: 'Yen',
          logo: '/images/clients/client/PRODUCCION FABRICACION/logoYen.png',
        },
      ],
    },
    {
      name: 'Servicios',
      icon: '/images/clients/category/servicio-de-auto.png',
      companies: [
        {
          name: 'MultiScreen',
          logo: '/images/clients/client/SERVICIOS/Logo MultiScreen.jpg',
        },
        {
          name: 'Agroser',
          logo: '/images/clients/client/SERVICIOS/LogoAgroser.jpg',
        },
        {
          name: 'Guasuca',
          logo: '/images/clients/client/SERVICIOS/LOGOGUASUCA.png',
        },
        {
          name: 'Jaguti',
          logo: '/images/clients/client/SERVICIOS/LogoJaguti.jpg',
        },
        {
          name: 'Servicios',
          logo: '/images/clients/client/SERVICIOS/LOGOSERVICIOS.png',
        },
        {
          name: 'Templo',
          logo: '/images/clients/client/SERVICIOS/LOGOTEMPLO.jpeg',
        },
      ],
    },
  ];

  selectedCompanies = this.categories[1].companies; // Empresas de la primera categoría
  activeCategoryIndex = 0;

  onCategorySelect(companies: any[], index: number): void {
    this.selectedCompanies = companies;
    this.activeCategoryIndex = index; // Actualiza el botón activo
  }
}
