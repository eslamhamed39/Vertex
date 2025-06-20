import {
  Component,
  AfterViewInit,
  OnDestroy,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';// import {faYoutube} from '@fortawesome/free-solid-svg-icons';
// declare var Swiper: any;
declare var PageLoad: any;
declare var ScrollEffects: any;
declare var FirstLoad: any;
declare var PageLoadActions: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  isHovered = false;
  captcha:string;
  email: string;
  isBrowser: boolean;

  constructor(private router: Router,@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.captcha = '';
    this.email = 'Secret@email.com';

    if (this.isBrowser) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          console.log("Navigated to HomeComponent, executing scripts...");
          this.ensureBackgroundColor();
          this.executeJsFunctions();
        }
      });
    }
  }

   navigateWithReload(url: string) {
    if (this.isBrowser) {
      this.router.navigateByUrl(url).then(() => {
        window.location.reload();
      });
    }
  }

  resolved(captchaResponse: string) {
    if (this.isBrowser) {
      this.captcha = captchaResponse;
      console.log('resolved captcha with response: ' + this.captcha);
    }
  }

  ngAfterViewInit(): void {
    if (this.isBrowser) {
      this.ensureBackgroundColor();
      this.executeJsFunctions();
    }
  }

  ngOnDestroy(): void {
    if (this.isBrowser) {
      console.log("HomeComponent destroyed.");
    }
  }

  private executeJsFunctions() {
    if (!this.isBrowser) return;

    setTimeout(() => {
      if (typeof PageLoad !== 'undefined') PageLoad();
      if (typeof ScrollEffects !== 'undefined') ScrollEffects();
      if (typeof FirstLoad !== 'undefined') FirstLoad();
      if (typeof PageLoadActions !== 'undefined') PageLoadActions();
    }, 500);
  }

  private ensureBackgroundColor() {
    if (!this.isBrowser) return;

    document.body.style.backgroundColor = "#000";
    document.documentElement.style.backgroundColor = "#000";
  }
  
}
