import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { gsap } from 'gsap';

@Component({
  selector: 'app-preloader',
  templateUrl: './preloader.component.html',
  styleUrls: ['./preloader.component.css']
})
export class PreloaderComponent implements AfterViewInit{
  @ViewChild('preloaderWrap', { static: false }) preloaderWrap!: ElementRef;
  @ViewChild('trackbar', { static: false }) trackbar!: ElementRef;
  @ViewChild('loadbar', { static: false }) loadbar!: ElementRef;
  @ViewChild('percentage', { static: false }) percentage!: ElementRef;

  constructor() {}

  ngAfterViewInit(): void {
    this.initPreloaderAnimations();
  }

  initPreloaderAnimations(): void {
    // إعداد الرسوم المتحركة باستخدام GSAP
    gsap.set(this.preloaderWrap.nativeElement, { visibility: 'visible' });

    // تحريك الـ loadbar
    const timing = window.performance.timing;
    const loadTime = -(timing.loadEventEnd - timing.navigationStart) / 100 % 500 * 10;

    gsap.to(this.loadbar.nativeElement, {
      width: '0%',
      duration: loadTime / 1000, // تحويل الوقت إلى ثوانٍ
      ease: 'power3.easeOut'
    });

    // عداد النسبة المئوية من 0 إلى 100
    this.animatePercentage(0, 100, loadTime);

    // إخفاء الـ preloader بعد انتهاء التحميل
    this.hidePreloaderOnLoad();
  }

  animatePercentage(start: number, end: number, duration: number): void {
    const range = end - start;
    const stepTime = Math.abs(Math.floor(duration / range));
    let current = start;
    const increment = end > start ? 1 : -1;

    const timer = setInterval(() => {
      current += increment;
      this.percentage.nativeElement.textContent = current;
      if (current === end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

  hidePreloaderOnLoad(): void {
    // الانتظار حتى يتم تحميل كل الصور أو المحتوى
    window.onload = () => {
      gsap.to(this.trackbar.nativeElement, {
        duration: 0.3,
        opacity: 0,
        y: -10,
        ease: 'power2.easeIn'
      });

      gsap.to(this.percentage.nativeElement, {
        duration: 0.3,
        opacity: 0,
        y: -10,
        ease: 'power2.easeIn'
      });

      gsap.to(this.preloaderWrap.nativeElement, {
        duration: 1,
        yPercent: -101,
        delay: 0.6,
        ease: 'power2.easeInOut',
        onComplete: () => {
          this.preloaderWrap.nativeElement.style.visibility = 'hidden';
          this.preloaderWrap.nativeElement.style.opacity = '0';
        }
      });
    };
  }
}
