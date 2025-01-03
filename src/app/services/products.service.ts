import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from '@model/product';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private readonly products: Product[] = [
    {
      name: 'SYSplus Empresarial',
      details: `Programa para una empresa pequeña o mediana que lleva su propia contabilidad. Manejo
        completo de inventario, ordenes de producción, facturación, pedidos, remisiones, ruteros de
        entrega, cartera, compras y órdenes de compra, cuentas por pagar, tesorería y contabilidad.
        Incluye POS y Mostrador para registro de ventas. Opcionalmente puede agregar módulos de
        CRM, nómina, producción o importaciones NO incluidos en el precio.`,
      img: '/images/products/empresarial.png',
      price: 50000,
      clients: 150,
      code: 'sysplus_enterprise',
    },
    {
      name: 'SYSplus Comercial',
      details: `Programa para una empresa comercial o autoservicio que no lleva contabilidad en sus
        instalaciones. Manejo completo de inventario, facturación, pedidos, remisiones, ruteros de
        entrega, cartera, compras y órdenes de compra, cuentas por pagar y tesorería. Incluye la
        posibilidad de facturar con POS o Mostrador.`,
      img: '/images/products/comercial.png',
      price: 150000,
      clients: 250,
      code: 'sysplus_comercial',
    },
    {
      name: 'SYSplus Contabilidad',
      details: `Para empresas cuyo objeto social no es el servicio contable.`,
      img: '/images/products/contabilidad.png',
      price: 20000,
      clients: 500,
      code: 'sysplus_accounting',
    },
    {
      name: 'Planes de servicio',
      details: `Programa para una empresa de servicios que no lleva inventario ni compras. Manejo completo
        de facturación, cartera, contabilidad, cuentas por pagar y tesorería. Incluye la posibilidad de
        facturar con POS o Mostrador.`,
      img: '/images/products/servicio.png',
      price: 300000,
      clients: 320,
      code: 'sysplus_services',
    },
    {
      name: 'SYSplus ERP',
      details: `Programa para una empresa mediana o grande que lleva su propia contabilidad. Manejo
        completo de inventario, ordenes de producción, facturación, pedidos, remisiones, ruteros de
        entrega, cartera, compras y órdenes de compra, cuentas por pagar, tesorería y contabilidad.
        Incluye POS y Mostrador para registro de ventas. Opcionalmente puede agregar módulos de
        Producción, Nómina, CRM e Importaciones no incluidos en el precio.`,
      img: '/images/products/erp.png',
      price: 135000,
      clients: 20,
      code: 'sysplus_erp',
    },
    {
      name: 'Servicio de soporte',
      details: `Servicios de Hardware y Software, aplicación SYSplus. Desarrollo de aplicaciones.\n
      • Mantenimiento de Hardware y equipos. \n
      • Software aplicación Sysplus. \n
      • Desarrollo de aplicaciones.\n
      • Desarrollo de reportes.\n
      • Capacitaciones personalizadas.\n
      • Contratos de asesoría mensual.\n
      • Bolsas de minutos para servicios de soporte (preparadas).`,
      img: '/images/products/soporte.png',
      price: 85000,
      clients: 1000,
      code: 'support',
    },
  ];
  constructor() {}

  getProducts() {
    return of(this.products);
  }

  getProduct(name: string): Observable<Product> {
    const product = this.products.find((p) => p.code === name);
    if (product === undefined) {
      return throwError(() => {
        return new HttpErrorResponse({ status: 404, statusText: 'Not found' });
      });
    }
    return of(product);
  }
}
