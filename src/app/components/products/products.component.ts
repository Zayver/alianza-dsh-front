import { CurrencyPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Carousel } from 'primeng/carousel';

@Component({
  selector: 'alianzadsh-products',
  imports: [CurrencyPipe, Carousel],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  readonly products: any = [
    {
      name: "SYSplus Empresarial",
      details: `Programa para una empresa pequeña o mediana que lleva su propia contabilidad. Manejo
        completo de inventario, ordenes de producción, facturación, pedidos, remisiones, ruteros de
        entrega, cartera, compras y órdenes de compra, cuentas por pagar, tesorería y contabilidad.
        Incluye POS y Mostrador para registro de ventas. Opcionalmente puede agregar módulos de
        CRM, nómina, producción o importaciones NO incluidos en el precio.`,
      img: "billing.jpg",
      price: 50000,
      clients: 150,
    },
    {
      name: "SYSplus Comercial",
      details: `Programa para una empresa comercial o autoservicio que no lleva contabilidad en sus
        instalaciones. Manejo completo de inventario, facturación, pedidos, remisiones, ruteros de
        entrega, cartera, compras y órdenes de compra, cuentas por pagar y tesorería. Incluye la
        posibilidad de facturar con POS o Mostrador.`,
      img: "commerce.jpg",
      price: 150000,
      clients: 250,
    },
    {
      name: "SYSplus Contabilidad",
      details: `Para empresas cuyo objeto social no es el servicio contable.`,
      img: "accounting.jpg",
      price: 20000,
      clients: 500,
    },
    {
      name: "SYSplus Servicios",
      details: `Programa para una empresa de servicios que no lleva inventario ni compras. Manejo completo
        de facturación, cartera, contabilidad, cuentas por pagar y tesorería. Incluye la posibilidad de
        facturar con POS o Mostrador.`,
      img: "services.jpg",
      price: 300000,
      clients: 320,
    },
    {
      name: "SYSplus ERP",
      details: `Programa para una empresa mediana o grande que lleva su propia contabilidad. Manejo
        completo de inventario, ordenes de producción, facturación, pedidos, remisiones, ruteros de
        entrega, cartera, compras y órdenes de compra, cuentas por pagar, tesorería y contabilidad.
        Incluye POS y Mostrador para registro de ventas. Opcionalmente puede agregar módulos de
        Producción, Nómina, CRM e Importaciones no incluidos en el precio.`,
      img: "erp.jpg",
      price: 135000,
      clients: 20,
    },
    {
      name: "Servicio de soporte",
      details: `Servicios de Hardware y Software, aplicación SYSplus. Desarrollo de aplicaciones.`,
      img: "support.jpg",
      price: 85000,
      clients: 1000,
    }
  ]

  readonly colors = [
    "#FBE817", // logo-yellow
    "#E7262D", // logo-red
    "#88CF2F", // logo-green
    "#4376C5", // logo-blue
    "#FB177B", // logo-purple
  ]

  currentColors: string[] = []
  readonly responsive = [
    {
      breakpoint: '767px',
      numVisible: 1,
      numScroll: 1,
    },
    {
      breakpoint: '1400px',
      numVisible: 3,
      numScroll: 3,
  },
  ]

  ngOnInit(): void {
    let copy = [...this.colors]
    for (let i = 0; i < this.products.length; i++) {
      if (copy.length === 0) {
        copy = [...this.colors]
      }
      const index = Math.floor(Math.random() * copy.length)
      this.products[i].color = copy.splice(index, 1)[0]
    }
  }
}
