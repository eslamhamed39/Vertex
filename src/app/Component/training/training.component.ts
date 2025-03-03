import { Component, AfterViewInit, HostListener, OnInit, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

declare var particlesJS: any; // تعريف Particles.js يدوياً
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
// export class TrainingComponent  {
export class TrainingComponent implements AfterViewInit {
  currentId: string | null = null;
  tabContainerHeight = 70;
  lastScroll: number = 0;
  currentTab: HTMLElement | null = null;

  constructor(private router: Router , private el: ElementRef) {}

  ngAfterViewInit() {
    this.initParticles();
    const navContainer = this.el.nativeElement.querySelector('.nav-container');
    if (navContainer) {
      this.tabContainerHeight = navContainer.offsetHeight;
    }
  }

  // initParticles() {
  //   Particles.init({
  //     selector: '.background',
  //     color: ['#03dac6', '#ff0266', '#000000'],
  //     connectParticles: true,
  //     responsive: [
  //       {
  //         breakpoint: 768,
  //         options: {
  //           color: ['#faebd7', '#03dac6', '#ff0266'],
  //           maxParticles: 43,
  //           connectParticles: false
  //         }
  //       }
  //     ]
  //   });
  // }

  


  initParticles() {
    if (typeof particlesJS !== 'undefined') {
      particlesJS.load('particles-js', 'assets/particles.json', function() {
        console.log('Particles.js loaded successfully');
      });
    } else {
      console.error("Particles.js is not loaded properly");
    }
  }

  scrollToTab(tabId: string) {
    const element = document.querySelector(tabId);
    if (element) {
      const offset = element.getBoundingClientRect().top + window.scrollY - this.tabContainerHeight + 1;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', [])
  onScroll() {
    this.checkHeaderPosition();
    this.findCurrentTabSelector();
    this.lastScroll = window.scrollY;
  }



  onTabClick(event: Event, targetId: string): void {
    event.preventDefault();
    const targetElement = document.querySelector(targetId) as HTMLElement;
    if (targetElement) {
      const scrollTop = targetElement.getBoundingClientRect().top + window.scrollY - this.tabContainerHeight + 1;
      window.scrollTo({ top: scrollTop, behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkHeaderPosition();
    this.findCurrentTabSelector();
    this.lastScroll = window.scrollY;
  }





  @HostListener('window:resize', [])
  onWindowResize(): void {
    if (this.currentId) {
      this.setSliderCss();
    }
  }


  checkHeaderPosition(): void {
    const headerHeight = 100;
    const navContainer = this.el.nativeElement.querySelector('.nav-container');
    if (!navContainer) { 
      console.error('nav-container غير موجود');
      return;
    }
  
    // حساب الـ offset باستخدام العنصر نفسه
    const offset = navContainer.offsetTop + navContainer.offsetHeight - headerHeight;
  
    // إضافة أو إزالة الكلاسات بناءً على موقع التمرير
    if (window.scrollY > headerHeight) {
      navContainer.classList.add('nav-container--scrolled');
    } else {
      navContainer.classList.remove('nav-container--scrolled');
    }
  
    if (window.scrollY > this.lastScroll && window.scrollY > offset) {
      navContainer.classList.add('nav-container--move-up');
      navContainer.classList.remove('nav-container--top-first');
      navContainer.classList.add('nav-container--top-second');
    } else if (window.scrollY < this.lastScroll && window.scrollY > offset) {
      navContainer.classList.remove('nav-container--move-up');
      navContainer.classList.remove('nav-container--top-second');
      navContainer.classList.add('nav-container--top-first');
    } else {
      navContainer.classList.remove('nav-container--move-up', 'nav-container--top-first', 'nav-container--top-second');
    }
    
    // تحديث قيمة this.lastScroll بعد كل تمرير
    this.lastScroll = window.scrollY;
  }
  
  
  
  

  findCurrentTabSelector(): void {
    const navTabs: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.nav-tab');
    let newCurrentId: string | null = null;
    let newCurrentTab: HTMLElement | null = null;

    navTabs.forEach(tab => {
      const targetId = tab.getAttribute('href');
      if (targetId) {
        const targetElement = document.querySelector(targetId) as HTMLElement;
        if (targetElement) {
          const offsetTop = targetElement.offsetTop - this.tabContainerHeight;
          const offsetBottom = targetElement.offsetTop + targetElement.offsetHeight - this.tabContainerHeight;
          if (window.scrollY > offsetTop && window.scrollY < offsetBottom) {
            newCurrentId = targetId;
            newCurrentTab = tab;
          }
        }
      }
    });

    if (this.currentId !== newCurrentId || this.currentId === null) {
      this.currentId = newCurrentId;
      this.currentTab = newCurrentTab;
      this.setSliderCss();
    }
  }

  setSliderCss(): void {
    const slider = this.el.nativeElement.querySelector('.nav-tab-slider') as HTMLElement;
    if (this.currentTab && slider) {
      const width = this.currentTab.offsetWidth;
      const left = this.currentTab.offsetLeft;
      slider.style.width = width + 'px';
      slider.style.left = left + 'px';
    }
  }



}
