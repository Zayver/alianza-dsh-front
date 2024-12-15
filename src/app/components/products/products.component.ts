import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductsService } from '@services/products.service';
import { Carousel } from 'primeng/carousel';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'alianzadsh-products',
  imports: [CurrencyPipe, Carousel, AsyncPipe, RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  products$!: Observable<any>

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

  private readonly productService = inject(ProductsService)

  ngOnInit(): void {
    this.products$ = this.productService.getProducts().pipe(tap((products)=>this.fillColors(products)))  
  }

  private fillColors(products: any[]){
    let copy = [...this.colors]
    for (let i = 0; i < products.length; i++) {
      if (copy.length === 0) {
        copy = [...this.colors]
      }
      const index = Math.floor(Math.random() * copy.length)
      products[i].color = copy.splice(index, 1)[0]
    }
  }
}
