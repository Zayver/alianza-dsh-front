import { AsyncPipe, CurrencyPipe } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '@model/product';
import { ProductsService } from '@services/products.service';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { KeyFilter } from 'primeng/keyfilter';
import { Textarea } from 'primeng/textarea';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Component({
  selector: 'alianzadsh-productform',
  imports: [ReactiveFormsModule, InputText, Textarea, KeyFilter, AsyncPipe, CurrencyPipe],
  templateUrl: './productform.component.html',
  styleUrl: './productform.component.scss'
})
export class ProductformComponent implements OnInit{
  product$!: Observable<Product>
  productForm!: FormGroup

  private readonly productService = inject(ProductsService)
  private readonly formBuilder = inject(FormBuilder)
  private readonly router = inject(Router)

  randColor: string = ""

  readonly colors = [
    "#FBE817", // logo-yellow
    "#E7262D", // logo-red
    "#88CF2F", // logo-green
    "#4376C5", // logo-blue
    "#FB177B", // logo-purple
  ]

  @Input()
  set code(code: string) {
    this.product$ = this.productService.getProduct(code).pipe(catchError((err) => {
      if (err.status === 404) {
        this.router.navigateByUrl("/e404")
      }
      return throwError(() => err)
    })).pipe(tap((product) => {
      this.productForm = this.formBuilder.group({
        product: product.code,
        companyName: ['', Validators.required],
        tel: ['', Validators.required],
        email: ['', [Validators.required, Validators.email]],
        comments: ['']
      })
    }))
  }

  ngOnInit(): void {
    this.randColor = this.colors.at(Math.floor(Math.random() * this.colors.length)) as string
  }

  sendForm(){
    //TODO MAKE BACKEND REQUEST
    console.log(this.productForm.value)
  }
}
