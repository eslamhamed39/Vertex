import {
  Component,
  OnInit,
  AfterViewInit,
  ViewChild,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { AuthService } from 'src/app/Services/auth.service';
import { ToastNotificationComponent } from '../toast-notification/toast-notification.component';

declare var particlesJS: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, AfterViewInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  isLoading: boolean = false;
  isBrowser: boolean;

  @ViewChild('toastRef') toastRef!: ToastNotificationComponent;

  constructor(
    private authService: AuthService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit(): void {
    // empty for now
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.loadParticlesScript();
    }
  }

  loadParticlesScript(): void {
    if (!this.isBrowser) return;

    if (typeof particlesJS === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
      script.onload = () => this.initializeParticles();
      document.body.appendChild(script);
    } else {
      this.initializeParticles();
    }
  }

  initializeParticles(): void {
    if (!this.isBrowser) return;

    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 50,
          "density": {
            "enable": true,
            "value_area": 500
          }
        },
        "color": { "value": "#ee4437" },
        "shape": {
          "type": "circle",
          "stroke": { "width": 0, "color": "#000000" },
          "polygon": { "nb_sides": 5 },
          "image": { "width": 100, "height": 100 }
        },
        "opacity": {
          "value": 0.5,
          "random": false
        },
        "size": {
          "value": 5,
          "random": true
        },
        "line_linked": {
          "enable": true,
          "distance": 150,
          "color": "#7d7d7d",
          "opacity": 0.4,
          "width": 1
        },
        "move": {
          "enable": true,
          "speed": 6,
          "direction": "none",
          "random": false,
          "straight": false,
          "out_mode": "out"
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": { "enable": true, "mode": "repulse" },
          "onclick": { "enable": true, "mode": "push" },
          "resize": true
        },
        "modes": {
          "grab": { "distance": 400, "line_linked": { "opacity": 1 } },
          "bubble": { "distance": 400, "size": 40, "duration": 2, "opacity": 8, "speed": 3 },
          "repulse": { "distance": 100 },
          "push": { "particles_nb": 4 },
          "remove": { "particles_nb": 2 }
        }
      },
      "retina_detect": true
    });
  }

  showSuccess(message: string) {
    this.toastRef?.displayToast(message, 'success');
  }

  showInfo() {
    this.toastRef?.displayToast('Here is some information.', 'info');
  }

  showWarning(message: string) {
    this.toastRef?.displayToast(message, 'warning');
  }

  showError(error: any) {
    this.toastRef?.displayToast(error, 'error');
  }

  login(): void {
    this.errorMessage = '';

    if (!this.username || !this.password) {
      this.errorMessage = 'Username and password are required';
      this.showWarning(this.errorMessage);
      return;
    }

    this.isLoading = true;

    this.authService.login(this.username, this.password).subscribe({
      next: (response) => {
        this.isLoading = false;

        if (response.success) {
          if (this.isBrowser) {
            localStorage.setItem('token', 'fawzy id 58595');
            window.location.href = '/BlogManagment';
          }

          this.showSuccess("Login successful");
        } else {
          this.errorMessage = response.message;
          this.showError(this.errorMessage);
        }
      },
      error: (error) => {
        this.isLoading = false;

        if (error.status === 401) {
          this.errorMessage = 'Invalid username or password';
          this.showError(this.errorMessage);
        } else if (error.status === 400) {
          this.errorMessage = 'Username and password are required';
          this.showWarning(this.errorMessage);
        } else {
          this.errorMessage = 'An error occurred. Please try again.';
          this.showError(this.errorMessage);
        }

        console.error('Login error:', error);
      }
    });
  }
}
