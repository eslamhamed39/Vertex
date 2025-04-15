import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { gsap } from 'gsap';
// import {faYoutube} from '@fortawesome/free-solid-svg-icons';
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
  constructor(private router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log("Navigated to HomeComponent, executing scripts...");
        this.ensureBackgroundColor();
        this.executeJsFunctions();
      }
    });
    this.captcha = '';
    this.email = 'Secret@email.com';
  }

  navigateWithReload(url: string) {
    this.router.navigateByUrl(url).then(() => {
      window.location.reload();
    });
  }

  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log('resolved captcha with response: ' + this.captcha);
  }


  ngAfterViewInit(): void {
    this.ensureBackgroundColor();
    this.executeJsFunctions();
  }

  ngOnDestroy(): void {
    console.log("HomeComponent destroyed.");
  }
  private executeJsFunctions() {
    setTimeout(() => {
      if (typeof PageLoad !== 'undefined') {
        console.log("Executing PageLoad()");
        PageLoad();
      }
      if (typeof ScrollEffects !== 'undefined') {
        console.log("Executing ScrollEffects()");
        ScrollEffects();
      }
      if (typeof FirstLoad !== 'undefined') {
        console.log("Executing FirstLoad()");
        FirstLoad();
      }
      if (typeof PageLoadActions !== 'undefined') {
        console.log("Executing PageLoadActions()");
        PageLoadActions();
      }
    }, 500);
  }

  private ensureBackgroundColor() {
    document.body.style.backgroundColor = "#000"; // Ensure background remains black
    document.documentElement.style.backgroundColor = "#000";
  }
  
}
