import { Component, inject, OnInit, signal } from '@angular/core';
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
import { Select } from 'primeng/select';
import { FileUpload } from 'primeng/fileupload';
import { HttpClientModule } from '@angular/common/http';
import { finalize, of } from 'rxjs';

@Component({
  selector: 'alianzadsh-contactus',
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    InputText,
    InputNumber,
    Textarea,
    Select,
    KeyFilter,
    CommonModule,
    FileUpload
  ],
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.scss'],
})
export class ContactusComponent implements OnInit {
  private readonly formBuilder = inject(FormBuilder);
  form!: FormGroup;
  loading = signal(false);

  readonly services = [
    { value: 'SOFTWARE O HARDWARE', display: 'Software o Hardware' },
    { value: 'SUPPORT_SERVICE', display: 'Soporte' },
  ];

  selectedFiles: File[] = [];

  ngOnInit(): void {
    // Inicialización del formulario
    this.form = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: ['', Validators.required],
      employeeQuantity: [{ value: null, disabled: false }],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required],
      comments: [''],
      serviceType: ['', Validators.required],
      attachments: [null],
    });

    // Suscripción al cambio de valor en `serviceType`
    this.form.get('serviceType')?.valueChanges.subscribe((value) => {
      if (value === 'SUPPORT_SERVICE') {
        this.form.get('employeeQuantity')?.disable(); // Deshabilitar si es "Soporte"
      } else {
        this.form.get('employeeQuantity')?.enable(); // Habilitar en otros casos
      }
    });
  }

  sendContactForm() {
    const request = this.form.value;
    request.attachments = this.selectedFiles;

    // Simulación de envío
    this.loading.set(true);
    of({})
      .pipe(finalize(() => this.loading.set(false)))
      .subscribe({
        next: () => {
          console.log('Formulario enviado:', request);
          this.form.reset(); // Limpiar el formulario después del envío
          this.selectedFiles = []; // Limpiar archivos seleccionados
        },
        error: (err) => console.error('Error al enviar formulario:', err),
      });
  }

  onFileUpload(event: any): void {
    const files = event.files;
    this.selectedFiles = files; // Almacenar archivos cargados
    console.log('Archivos cargados:', files);
  }
}
