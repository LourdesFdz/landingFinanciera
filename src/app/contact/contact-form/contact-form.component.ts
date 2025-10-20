import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ApiService, ContactPayload } from '../../services/api.service';

declare global {
  interface Window { dataLayer: any[]; }
}

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required, Validators.minLength(10)])
  });

  submitting = false;
  success = false;
  errorMsg = '';

  constructor(private api: ApiService) {}

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;
    this.success = false;
    this.errorMsg = '';

    const payload: ContactPayload = this.form.value as ContactPayload;

    // GTM event: intento de envío
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: 'formSubmit_attempt',
      formId: 'contact-landing'
    });

    this.api.submitContact(payload).subscribe({
      next: (res) => {
        this.submitting = false;
        this.success = true;

        // GTM event: envío exitoso
        window.dataLayer.push({
          event: 'formSubmission',
          formId: 'contact-landing',
          formData: { name: payload.name, email: payload.email }
        });

        this.form.reset();
      },
      error: (err) => {
        this.submitting = false;
        this.errorMsg = 'Ocurrió un error al enviar el formulario. Intenta más tarde.';

        // GTM event: error
        window.dataLayer.push({
          event: 'formSubmission_error',
          formId: 'contact-landing',
          error: err?.message || 'Error desconocido'
        });
      }
    });
  }
}