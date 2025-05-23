import { Component } from '@angular/core';

@Component({
  selector: 'app-toast-notification',
  templateUrl: './toast-notification.component.html',
  styleUrls: ['./toast-notification.component.css'],
})
export class ToastNotificationComponent {
  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'info' | 'warning' | 'error' = 'success';

  displayToast(message: string, type: 'success' | 'info' | 'warning' | 'error'): void {
    console.log('Displaying toast:', { message, type }); 
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    setTimeout(() => {
      console.log('Hiding toast'); 
      this.showToast = false;
    }, 3000);
  }

  closeToast(): void {
    console.log('Toast closed manually'); 
    this.showToast = false;
  }
}