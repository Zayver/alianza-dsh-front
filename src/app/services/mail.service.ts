import { Injectable } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { environment } from '@environment/environment';
import { ContactInfo } from '@model/contactinfo';
import { ProductRequest } from '@model/productrequest';
import { from, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  sendMail(data: ProductRequest): Observable<EmailJSResponseStatus> {
    return from(emailjs.send(
      environment.emailJs.serviceId,
      environment.emailJs.templateId,
      data,
      environment.emailJs.publicKey
    ))
  }

  sendContactMail(data: ContactInfo): Observable<EmailJSResponseStatus>{
    return from(emailjs.send(
      environment.emailJs.serviceId,
      environment.emailJs.templateContactId,
      data,
      environment.emailJs.publicKey
    ))
  }
}
