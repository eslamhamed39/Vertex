import {
  Component,
  AfterViewInit,
  HostListener,
  OnInit,
  ElementRef,
  Inject,
  PLATFORM_ID
} from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
export class TrainingComponent implements AfterViewInit {
  currentId: string | null = null;
  tabContainerHeight = 75;
  lastScroll: number = 0;
  currentTab: HTMLElement | null = null;
  isLoading: boolean = true;
  isBrowser: boolean;

  constructor(
    private router: Router,
    private el: ElementRef,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngAfterViewInit() {
    if (!this.isBrowser) return;
    const navContainer = this.el.nativeElement.querySelector('.nav-container');
    if (navContainer) {
      this.tabContainerHeight = navContainer.offsetHeight;
    }
  }

  scrollToTab(tabId: string) {
    if (!this.isBrowser) return;
    const element = document.querySelector(tabId);
    if (element) {
      const offset =
        element.getBoundingClientRect().top +
        window.scrollY -
        this.tabContainerHeight +
        1;
      window.scrollTo({ top: offset, behavior: 'smooth' });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    if (!this.isBrowser) return;
    this.checkHeaderPosition();
    this.findCurrentTabSelector();
    this.lastScroll = window.scrollY;
  }

  @HostListener('window:load')
  onPageLoad() {
    if (!this.isBrowser) return;
    this.isLoading = false;
  }

  onTabClick(event: Event, targetId: string): void {
    if (!this.isBrowser) return;
    event.preventDefault();
    const targetElement = document.querySelector(targetId) as HTMLElement;
    if (targetElement) {
      if (targetId === '#tab-typescript') {
        const titleElement = targetElement.querySelector('h1') as HTMLElement;
        const scrollTop =
          titleElement?.getBoundingClientRect().top +
          window.scrollY -
          185;
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });
      } else {
        const scrollTop =
          targetElement.getBoundingClientRect().top +
          window.scrollY -
          this.tabContainerHeight +
          1;
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });
      }
    }
  }

  @HostListener('window:resize', [])
  onWindowResize(): void {
    if (!this.isBrowser) return;
    if (this.currentId) {
      this.setSliderCss();
    }
  }

  checkHeaderPosition(): void {
    if (!this.isBrowser) return;
    const headerHeight = 100;
    const navContainer = this.el.nativeElement.querySelector('.nav-container');
    if (!navContainer) return;

    const offset =
      navContainer.offsetTop + navContainer.offsetHeight - headerHeight;

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
      navContainer.classList.remove(
        'nav-container--move-up',
        'nav-container--top-first',
        'nav-container--top-second'
      );
    }
    this.lastScroll = window.scrollY;
  }

  findCurrentTabSelector(): void {
    if (!this.isBrowser) return;
    const navTabs: NodeListOf<HTMLElement> =
      this.el.nativeElement.querySelectorAll('.nav-tab');
    let newCurrentId: string | null = null;
    let newCurrentTab: HTMLElement | null = null;

    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    navTabs.forEach((tab) => {
      const targetId = tab.getAttribute('data-target');
      if (targetId) {
        const targetElement = document.querySelector(targetId) as HTMLElement;
        const titleElement = targetElement.querySelector('h1') as HTMLElement;
        if (targetElement) {
          // let offsetTop: number = titleElement?.getBoundingClientRect().top + window.scrollY - 185 ?? 0;
          let offsetTop: number = titleElement
            ? titleElement.getBoundingClientRect().top + window.scrollY - 185
            : 0;
          let offsetBottom =
            targetElement.offsetTop +
            targetElement.offsetHeight -
            this.tabContainerHeight;

          if (isMobile) {
            offsetTop += 500;
          }

          if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
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
    if (!this.isBrowser) return;
    const slider = this.el.nativeElement.querySelector(
      '.nav-tab-slider'
    ) as HTMLElement;
    if (this.currentTab && slider) {
      const width = this.currentTab.offsetWidth;
      const left = this.currentTab.offsetLeft;
      slider.style.width = width + 'px';
      slider.style.left = left + 'px';
    }
  }
}
