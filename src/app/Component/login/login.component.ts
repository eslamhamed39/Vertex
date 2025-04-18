import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
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

  @ViewChild('toastRef') toastRef!: ToastNotificationComponent;
  
  constructor(private authService: AuthService,
    private router: Router){}
  ngOnInit(): void {
    // Any initialization logic can go here
  }

  ngAfterViewInit(): void {
    this.loadParticlesScript();

    if (!this.toastRef) {
      console.error('Toast reference not available in ngAfterViewInit');
    } else {
      console.log('Toast reference successfully initialized');
    }
  }

  loadParticlesScript(): void {
    // Check if particlesJS is already available
    if (typeof particlesJS === 'undefined') {
      const script = document.createElement('script');
      script.src = 'https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js';
      script.onload = () => {
        this.initializeParticles();
      };
      document.body.appendChild(script);
    } else {
      this.initializeParticles();
    }
  }

  initializeParticles(): void {
    particlesJS('particles-js', {
      "particles": {
        "number": {
          "value": 50,
          "density": {
            "enable": true,
            "value_area": 500
          }
        },
        "color": {
          "value": "#ee4437"
        },
        "shape": {
          "type": "circle",
          "stroke": {
            "width": 0,
            "color": "#000000"
          },
          "polygon": {
            "nb_sides": 5
          },
          "image": {
            "width": 100,
            "height": 100
          }
        },
        "opacity": {
          "value": 0.5,
          "random": false,
          "anim": {
            "enable": false,
            "speed": 1,
            "opacity_min": 0.1,
            "sync": false
          }
        },
        "size": {
          "value": 5,
          "random": true,
          "anim": {
            "enable": false,
            "speed": 40,
            "size_min": 0.1,
            "sync": false
          }
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
          "out_mode": "out",
          "attract": {
            "enable": false,
            "rotateX": 600,
            "rotateY": 1200
          }
        }
      },
      "interactivity": {
        "detect_on": "canvas",
        "events": {
          "onhover": {
            "enable": true,
            "mode": "repulse"
          },
          "onclick": {
            "enable": true,
            "mode": "push"
          },
          "resize": true
        },
        "modes": {
          "grab": {
            "distance": 400,
            "line_linked": {
              "opacity": 1
            }
          },
          "bubble": {
            "distance": 400,
            "size": 40,
            "duration": 2,
            "opacity": 8,
            "speed": 3
          },
          "repulse": {
            "distance": 100
          },
          "push": {
            "particles_nb": 4
          },
          "remove": {
            "particles_nb": 2
          }
        }
      },
      "retina_detect": true,
      "config_demo": {
        "hide_card": false,
        "background_color": "#b61924",
        "background_image": "",
        "background_position": "50% 50%",
        "background_repeat": "no-repeat",
        "background_size": "cover"
      }
    });
  }

  showSuccess(message: string) {
    if (this.toastRef) {
      this.toastRef.displayToast(message, 'success');
    } else {
      console.error('Toast reference not available');
    }
  }

  showInfo() {
    if (this.toastRef) {
      this.toastRef.displayToast('Here is some information.', 'info');
    }
  }

  showWarning(message: string) {
    if (this.toastRef) {
      this.toastRef.displayToast(message, 'warning');
    }
  }

  showError(error: any) {
    if (this.toastRef) {
      this.toastRef.displayToast(error, 'error');
    }
  }


  login(): void {
    this.errorMessage = '';
    // console.log('Login attempt:', this.username, this.password);
    if (!this.username || !this.password) {
      this.errorMessage = 'Username and password are required';
      this.showWarning(this.errorMessage);
      return;
    }
    
    this.isLoading = true;
    
    this.authService.login(this.username, this.password)
      .subscribe({
        next: (response) => {
          console.log('Login response:', response);
          this.isLoading = false;
          if (response.success){
            localStorage.setItem('token', 'fawzy id 58595');
            window.location.href = '/BlogManagment';
            this.errorMessage = response.message;
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
