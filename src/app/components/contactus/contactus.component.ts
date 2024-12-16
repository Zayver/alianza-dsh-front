import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from 'primeng/button'
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms'
import { InputText } from 'primeng/inputtext'
import { InputNumber } from 'primeng/inputnumber'
import { KeyFilter } from 'primeng/keyfilter';
import { Textarea } from 'primeng/textarea'
import { Select } from 'primeng/select'
import { finalize, of } from 'rxjs';

@Component({
  selector: 'alianzadsh-contactus',
  imports: [ ReactiveFormsModule, InputText, InputNumber, Textarea, Select, KeyFilter, CommonModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.scss'
})
export class ContactusComponent implements OnInit{
  private readonly formBuilder = inject(FormBuilder)
  contactForm!: FormGroup;
  loading = signal(false)

  readonly services = [
    {value: 'SOFTWARE', display: 'Software'},
    {value: 'HARDWARE', display: 'Hardware'},
    {value: 'SUPPORT_SERVICE', display: 'Soporte'}
  ]

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      companyName: ['', Validators.required],
      employeeQuantity: [null],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', Validators.required],
      comments: [''],
      serviceType: ['', Validators.required]
    })
  }

  sendContactForm(){
    const request = this.contactForm.value
    //TODO make network request to backend
    this.loading.set(true)
    of({}).pipe(finalize(()=> this.loading.set(false))).subscribe({
      next: ()=> {
        console.log(request)
      }
    })
  }
}
