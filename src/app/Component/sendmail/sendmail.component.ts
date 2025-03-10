import { Component, OnInit, ViewChild } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { ToastNotificationComponent } from '../toast-notification/toast-notification.component';

@Component({
  selector: 'app-sendmail',
  templateUrl: './sendmail.component.html',
  styleUrls: ['./sendmail.component.css'],
})
export class SendmailComponent implements OnInit {
  captcha: string = '';
  email: string = 'Secret@email.com';

  @ViewChild('toastRef') toastRef!: ToastNotificationComponent;

  constructor() {}

  ngOnInit(): void {
    // Verify the toast component is available
    setTimeout(() => {
      if (!this.toastRef) {
        console.error('Toast reference not found!');
      } else {
        console.log('Toast component initialized successfully');
      }
    }, 0);
  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log('resolved captcha with response: ' + this.captcha);
  }

  showSuccess() {
    if (this.toastRef) {
      this.toastRef.displayToast('Email sent successfully!', 'success');
    } else {
      console.error('Toast reference not available');
    }
  }

  showInfo() {
    if (this.toastRef) {
      this.toastRef.displayToast('Here is some information.', 'info');
    }
  }

  showWarning() {
    if (this.toastRef) {
      this.toastRef.displayToast('Please complete the CAPTCHA.', 'warning');
    }
  }

  showError(error: any) {
    if (this.toastRef) {
      this.toastRef.displayToast(error, 'error');
    }
  }
  
  showWarningWithMessage(message: string) {
    if (this.toastRef) {
      this.toastRef.displayToast(message, 'warning');
    }
  }

  public sendEmail(e: Event) {
    e.preventDefault();
    console.log("Sending email...");
    
    const form = e.target as HTMLFormElement;
    
    if (!form || !form.elements) {
      this.showError('Form submission error');
      return;
    }
  
    // Get form field values
    const firstName = (form.elements.namedItem('first-name') as HTMLInputElement)?.value.trim();
    const lastName = (form.elements.namedItem('last-name') as HTMLInputElement)?.value.trim();
    const companyName = (form.elements.namedItem('company-name') as HTMLInputElement)?.value.trim();
    const phoneNumber = (form.elements.namedItem('tel-936') as HTMLInputElement)?.value.trim();
    const email = (form.elements.namedItem('your-email') as HTMLInputElement)?.value.trim();
    const message = (form.elements.namedItem('your-message') as HTMLTextAreaElement)?.value.trim();
  
    // Validation checks
    if (!firstName || !lastName || !companyName || !phoneNumber || !email || !message) {
      this.showWarningWithMessage('Please fill in all required fields.');
      return;
    }
  
    if (!this.captcha) {
      this.showWarning();
      return;
    }
  
    // If all validations pass, proceed with sending the email
    emailjs
      .sendForm(
        'service_0qwwihh',
        'template_3aeogp9',
        form,
        { publicKey: 'yE-H7ENSZyMvVA-_I' }
      )
      .then(
        (response) => {
          console.log('Email sent successfully:', response);
          this.showSuccess();
          form.reset();
          this.captcha = '';
        },
        (error: EmailJSResponseStatus) => {
          console.error('Email sending failed:', error);
          this.showError(error.text || 'Failed to send email');
        }
      )
      .catch((error) => {
        console.error('Unexpected error:', error);
        this.showError('An unexpected error occurred');
      });
  }
  
}