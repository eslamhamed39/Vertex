import {
  Component,
  AfterViewInit,
  HostListener,
  OnInit,
  ElementRef,
} from '@angular/core';
import { Router } from '@angular/router';

declare var particlesJS: any; // تعريف Particles.js يدوياً
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css'],
})
// export class TrainingComponent  {
export class TrainingComponent implements AfterViewInit {
  currentId: string | null = null;
  tabContainerHeight = 200;
  lastScroll: number = 0;
  currentTab: HTMLElement | null = null;
  isLoading: boolean = true; // متغير للتحكم في الـ Loading

  constructor(private router: Router, private el: ElementRef) {}

  ngAfterViewInit() {
    const navContainer = this.el.nativeElement.querySelector('.nav-container');
    if (navContainer) {
      this.tabContainerHeight = navContainer.offsetHeight;
    }
    if (document.readyState === 'complete') {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000); // الانتظار لمدة ثانية بعد التحميل
    } else {
      // إضافة مستمع لحدث تحميل الصفحة
      window.addEventListener('load', () => {
        setTimeout(() => {
          this.isLoading = false;
        }, 1000); // الانتظار لمدة ثانية بعد تحميل الصفحة
      });
    }
  }

  scrollToTab(tabId: string) {
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

  // @HostListener('window:scroll', [])
  // onScroll() {
  //   this.checkHeaderPosition();
  //   this.findCurrentTabSelector();
  //   this.lastScroll = window.scrollY;
  // }

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    this.checkHeaderPosition();
    this.findCurrentTabSelector();
    this.lastScroll = window.scrollY;
  }

  // @HostListener('window:load')
  // onPageLoad() {
  //   // إخفاء الـ Loading عند اكتمال تحميل الصفحة بالكامل
  //   this.isLoading = false;
  // }

  // onTabClick(event: Event, targetId: string): void {
  //   event.preventDefault();
  //   const targetElement = document.querySelector(targetId) as HTMLElement;
  //   if (targetElement) {
  //     const scrollTop = targetElement.getBoundingClientRect().top + window.scrollY - this.tabContainerHeight + 1;
  //     window.scrollTo({ top: scrollTop, behavior: 'smooth' });
  //   }
  // }

  onTabClick(event: Event, targetId: string): void {
    event.preventDefault();
    const targetElement = document.querySelector(targetId) as HTMLElement;
    if (targetElement) {
      if (targetId === '#tab-typescript') {
        const titleElement = targetElement.querySelector('h1') as HTMLElement;
        if (titleElement) {
          const scrollTop =
            titleElement.getBoundingClientRect().top + window.scrollY - 185;
          console.log('Scroll to Training Programs title at:', scrollTop);
          window.scrollTo({ top: scrollTop, behavior: 'smooth' });
        } else {
          const scrollTop = targetElement.offsetTop - this.tabContainerHeight;
          console.log('No h1 found, scrolling to section top:', scrollTop);
          window.scrollTo({ top: scrollTop, behavior: 'smooth' });
        }
      } else {
        const scrollTop =
          targetElement.getBoundingClientRect().top +
          window.scrollY -
          this.tabContainerHeight +
          1;
        console.log('Scroll to other section:', scrollTop);
        window.scrollTo({ top: scrollTop, behavior: 'smooth' });
      }
    } else {
      console.log('Target element not found for:', targetId);
    }
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
    const offset =
      navContainer.offsetTop + navContainer.offsetHeight - headerHeight;

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
      navContainer.classList.remove(
        'nav-container--move-up',
        'nav-container--top-first',
        'nav-container--top-second'
      );
    }

    // تحديث قيمة this.lastScroll بعد كل تمرير
    this.lastScroll = window.scrollY;
  }

  // findCurrentTabSelector(): void {
  //   const navTabs: NodeListOf<HTMLElement> = this.el.nativeElement.querySelectorAll('.nav-tab');
  //   let newCurrentId: string | null = null;
  //   let newCurrentTab: HTMLElement | null = null;

  //   navTabs.forEach(tab => {
  //     const targetId = tab.getAttribute('data-target');
  //     if (targetId) {
  //       const targetElement = document.querySelector(targetId) as HTMLElement;
  //       const titleElement = targetElement.querySelector('h1') as HTMLElement;
  //       if (targetElement) {
  //         let offsetTop: number;
  //         let offsetBottom: number;

  //         if (targetId === '#tab-typescript') {
  //           // لـ "Training Programs"، استخدم 3825 كنقطة البداية
  //           offsetTop = titleElement.getBoundingClientRect().top + window.scrollY - 185;
  //           offsetBottom = targetElement.offsetTop + targetElement.offsetHeight - this.tabContainerHeight; // النهاية الديناميكية
  //         } else {
  //           // للأقسام الأخرى، استخدم المنطق الديناميكي العادي
  //           offsetTop = targetElement.offsetTop - this.tabContainerHeight;
  //           offsetBottom = targetElement.offsetTop + targetElement.offsetHeight - this.tabContainerHeight;
  //         }

  //         if (window.scrollY >= offsetTop && window.scrollY < offsetBottom) {
  //           newCurrentId = targetId;
  //           newCurrentTab = tab;
  //         }
  //       }
  //     }
  //   });

  //   if (this.currentId !== newCurrentId || this.currentId === null) {
  //     this.currentId = newCurrentId;
  //     this.currentTab = newCurrentTab;
  //     this.setSliderCss();
  //   }
  // }

  findCurrentTabSelector(): void {
    const navTabs: NodeListOf<HTMLElement> =
      this.el.nativeElement.querySelectorAll('.nav-tab');
    let newCurrentId: string | null = null;
    let newCurrentTab: HTMLElement | null = null;

    // التحقق من حجم الشاشة (أقل من 767px)
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    navTabs.forEach((tab) => {
      const targetId = tab.getAttribute('data-target');
      if (targetId) {
        const targetElement = document.querySelector(targetId) as HTMLElement;
        const titleElement = targetElement.querySelector('h1') as HTMLElement;
        if (targetElement) {
          let offsetTop: number;
          let offsetBottom: number;

          if (targetId === '#tab-typescript') {
            // لـ "Training Programs"، استخدم 3825 كنقطة البداية
            offsetTop =
              titleElement.getBoundingClientRect().top + window.scrollY - 185;
            offsetBottom =
              targetElement.offsetTop +
              targetElement.offsetHeight -
              this.tabContainerHeight;
          } else {
            // للأقسام الأخرى، استخدم المنطق الديناميكي العادي
            offsetTop = targetElement.offsetTop - this.tabContainerHeight;
            offsetBottom =
              targetElement.offsetTop +
              targetElement.offsetHeight -
              this.tabContainerHeight;
          }

          // إضافة 100 بكسل إلى offsetTop في الشاشات أقل من 767px
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
