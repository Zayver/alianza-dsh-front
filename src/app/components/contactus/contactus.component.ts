import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputText } from 'primeng/inputtext';
import { InputNumber } from 'primeng/inputnumber';
import { KeyFilter } from 'primeng/keyfilter';
import { Textarea } from 'primeng/textarea';
import { RecaptchaModule } from 'ng-recaptcha-2';
import { environment } from '@environment/environment';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NgClass } from '@angular/common';
import { Button } from 'primeng/button';
import { MailService } from '@services/mail.service';
import { MessageService } from 'primeng/api';
import { finalize, timer } from 'rxjs';
import { Router } from '@angular/router';


@Component({
  selector: 'alianzadsh-contactus',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    InputText,
    InputNumber,
    Textarea,
    KeyFilter,
    RecaptchaModule,
    NgClass,
    Button
  ],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder)
  private readonly mailService = inject(MailService)
  private readonly messageService = inject(MessageService)
  private readonly router = inject(Router)

  protected readonly recaptchaKey = environment.recaptchaKey
  recaptchaOk = signal(false)
  form!: FormGroup;
  loading = signal(false);

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: ['', Validators.required],
      employeeQuantity: [{ value: null, disabled: false }],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required],
      comments: [''],
    });
  }

  sendContactForm() {
    this.loading.set(true);
    const formData = this.form.value;
    this.mailService.sendContactMail(formData).pipe(finalize(() => this.loading.set(false))).subscribe({
      next: (response: EmailJSResponseStatus) => {
        //Assuming all ok
        this.messageService.add({
          severity: 'success',
          summary: 'Gracias por comunicarte con nosotros, nos contactaremos tan pronto sea posible.'
        })
        timer(1500).subscribe(() => this.router.navigate(['/']))
      },
      error: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Ha ocurrido un error, intenta de nuevo más tarde por favor.'
        })
      }
    })

  }


  resolved(event: string | null) {
    //FULL verification should be done with the backend
    if (event === null) {
      return //verification on client side failed
    }
    this.recaptchaOk.set(true)
  }

  recaptchaError() {
    //Error on verification or timeout
    this.recaptchaOk.set(false)
  }
}
