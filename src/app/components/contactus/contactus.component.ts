import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
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
import { HttpClientModule } from '@angular/common/http';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { RecaptchaModule, ReCaptchaV3Service } from 'ng-recaptcha-2';
import { environment } from '@environment/environment';

@Component({
  selector: 'alianzadsh-contactus',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    InputText,
    InputNumber,
    Textarea,
    KeyFilter,
    CommonModule,
    RecaptchaModule
  ],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
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
    if (this.form.invalid) {
      console.error('Formulario inválido.');
      return;
    }

    this.loading.set(true);

    const formData = this.form.value;
    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      companyName: formData.companyName,
      employeeQuantity: formData.employeeQuantity,
      email: formData.email,
      tel: formData.tel,
      comments: formData.comments,
    };

    emailjs
      .send(
        'service_p5o7l79', // Reemplaza con tu Service ID de EmailJS
        'template_nrxkgd7', // Reemplaza con tu Template ID de EmailJS
        templateParams,
        'cXZ8_vlsvyH4TCZdK' // Reemplaza con tu User ID de EmailJS
      )
      .then(
        (response: EmailJSResponseStatus) => {
          console.log('Formulario enviado con éxito:', response.status, response.text);
          alert('Formulario enviado con éxito');
          this.form.reset();
        },
        (err: any) => {
          console.error('Error al enviar el formulario:', err);
          alert('Error al enviar el formulario. Por favor intenta nuevamente.');
        }
      )
      .finally(() => this.loading.set(false));
  }


  resolved(event: string | null){
    //FULL verification should be done with the backend
    if(event === null){
      return //verification on client side failed
    }
    this.recaptchaOk.set(true)
  }


}
