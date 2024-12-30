import { AsyncPipe } from '@angular/common';
import { Component, inject, Input, OnInit, signal } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Product } from '@model/product';
import { ProductsService } from '@services/products.service';
import { Button } from 'primeng/button';
import { InputText } from 'primeng/inputtext';
import { KeyFilter } from 'primeng/keyfilter';
import { Textarea } from 'primeng/textarea';
import { catchError, finalize, Observable, tap, throwError, timer } from 'rxjs';
import { RecaptchaModule } from 'ng-recaptcha-2';
import { environment } from '@environment/environment';
import { MailService } from '@services/mail.service';
import { EmailJSResponseStatus } from '@emailjs/browser';
import { MessageService } from 'primeng/api';

@Component({
  selector: 'alianzadsh-productform',
  imports: [ReactiveFormsModule, InputText, Textarea, KeyFilter, AsyncPipe, RecaptchaModule, Button],
  templateUrl: './productform.component.html',
  styleUrl: './productform.component.scss'
})
export class ProductformComponent implements OnInit {
  product$!: Observable<Product>;
  productForm!: FormGroup;
  loading = signal(false)

  protected readonly recaptchaKey = environment.recaptchaKey
  recaptchaOk = signal(false)

  private readonly productService = inject(ProductsService);
  private readonly messageService = inject(MessageService)
  private readonly mailService = inject(MailService);
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);

  randColor: string = '';

  readonly colors = [
    '#FBE817', // logo-yellow
    '#E7262D', // logo-red
    '#88CF2F', // logo-green
    '#4376C5', // logo-blue
    '#FB177B', // logo-purple
  ];

  @Input()
  set code(code: string) {
    this.product$ = this.productService.getProduct(code).pipe(
      catchError((err) => {
        if (err.status === 404) {
          this.router.navigateByUrl('/e404');
        }
        return throwError(() => err);
      })
    ).pipe(
      tap((product) => {
        this.productForm = this.formBuilder.group({
          product: product.name,
          companyName: ['', Validators.required],
          tel: ['', Validators.required],
          email: ['', [Validators.required, Validators.email]],
          comments: ['']
        });
      })
    );
  }

  ngOnInit(): void {
    this.randColor = this.colors.at(Math.floor(Math.random() * this.colors.length)) as string;
  }

  sendForm(): void {
    const formData = this.productForm.value;
    this.loading.set(true)
    this.mailService.sendMail(formData).pipe(finalize(()=> this.loading.set(false))).subscribe({
      next:(response: EmailJSResponseStatus)=>{
        //Assuming all ok
        this.messageService.add({
          severity: 'success',
          summary: 'Gracias por comunicarte con nosotros, nos contactaremos tan pronto sea posible.'
        })
        timer(1500).subscribe(()=> this.router.navigate(['/']))
      },
      error:()=>{
        this.messageService.add({
          severity: 'error',
          summary: 'Ha ocurrido un error, intenta de nuevo más tarde por favor.'
        })
      }
    })
  }

  resolved(event: string | null){
    //FULL verification should be done with the backend
    if(event === null){
      return //verification on client side failed
    }
    this.recaptchaOk.set(true)
  }

  recaptchaError(){
    //Error on verification or timeout
    this.recaptchaOk.set(false)
  }
}
