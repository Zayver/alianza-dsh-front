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
      name: 'SYSplus Comercial',
      details: `Para una empresa comercial o autoservicio que no lleva contabilidad en sus instalaciones. Manejo completo de Inventario, Facturación, Cartera, Compras, Cuentas por pagar y Tesorería.
*Incluye la posibilidad de facturar con POS o Mostrador.
 
Opcionalmente puede agregar módulos de CRM, Nómina, Producción, Importaciones o Aplicaciones web NO incluidos en el precio.
**Si lo deseas también puedes cambiar a la siguiente versión de SYSplus: Empresarial o ERP.
`,
      img: '/images/products/comercial.png',
      price: 150000,
      clients: 250,
      code: 'sysplus_comercial',
    },
    {
      name: 'SYSplus Empresarial',
      details: `Para una empresa pequeña o mediana que lleva su propia contabilidad. Manejo completo de Inventario, Facturación (pedidos, remisiones, ruteros de entrega), Cartera, Compras (órdenes, sugerido de compras), Cuentas por pagar, Tesorería y Contabilidad.
*Incluye la posibilidad de facturar con POS o Mostrador.
 
Opcionalmente puede agregar módulos de CRM, Nómina, Producción, Importaciones o Aplicaciones web NO incluidos en el precio.
**Si lo deseas también puedes cambiar a la siguiente versión de SYSplus: ERP.
`,
      img: '/images/products/empresarial.png',
      price: 50000,
      clients: 150,
      code: 'sysplus_enterprise',
    },
    {
      name: 'SYSplus ERP',
      details: `Para una empresa mediana a grande que lleva su propia contabilidad. Manejo completo de Inventario (órdenes de producción, clasificación de artículos a 3 niveles), Facturación (canales de distribución, pedidos, remisiones, ruteros de entrega), Cartera, Compras (órdenes de compra, sugerido), Cuentas por pagar, Tesorería y Contabilidad (Centro de costos a 3 niveles). *Incluye la posibilidad de facturar con POS o Mostrador.
 
Opcionalmente puede agregar módulos de CRM, Nómina, Producción, Importaciones o Aplicaciones web NO incluidos en el precio.
`,
      img: '/images/products/erp.png',
      price: 135000,
      clients: 20,
      code: 'sysplus_erp',
    },
    {
      name: 'Modulos Independientes SYSplus',
      details: `Tambien puedes adquirir sólo los modulos que necesites:
      • Facturacion • Compras • Inventarios • Cuentas por pagar • Tesoreria • Contabilidad • Nomina`,
      img: '/images/products/contabilidad.png',
      price: 20000,
      clients: 500,
      code: 'sysplus_accounting',
    },
    {
      name: 'Planes de servicios',
      details: `Servicios diseñados para brindar beneficios extras a nuestros clientes: • Capacitaciones personalizadas.\n
      • Contratos de asesoría mensual.\n
      • Bolsas de minutos para servicios de soporte (prepagadas).
      • Planes Copia de seguridad externa de la base de datos
      • Servicio de Mantenimiento y chequeo de la Base de Datos.`,
      img: '/images/products/servicio.png',
      price: 300000,
      clients: 320,
      code: 'sysplus_services',
    },
    {
      name: 'Otros Productos',
      details: `Ofrecemos otros servicios y productos como: • Servicios de Hardware y Software • Software Administrativo y Contable SYSplus.•  Desarrollo de aplicaciones.\n
      • Mantenimiento de Hardware y equipos. \n
      • Desarrollo de reportes.\n`,
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
