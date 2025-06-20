import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';





@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit , AfterViewInit {
  isBrowser: boolean = false;

  constructor(private el: ElementRef, private router: Router,@Inject(PLATFORM_ID) private platformId: Object) {  this.isBrowser = isPlatformBrowser(this.platformId); }

  ngOnInit() {
    if (this.isBrowser) {
        this.updateBorder(); // ✅ يعمل فقط في المتصفح
    }
  }

    ngAfterViewInit() {
    if (this.isBrowser) {
      this.updateBorder(); // تأكيد إضافي في حال اعتمدت على DOM كامل
    }
  }

  navigateWithReload(url: string) {
    if (this.isBrowser) {
      this.router.navigateByUrl(url).then(() => {
        window.location.reload();
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (this.isBrowser) {
      this.updateBorder();
    }
  }

  updateBorder() {
    if (!this.isBrowser) return;

    const pageContent = document.getElementById('page-nav');
    if (pageContent) {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollPosition / maxScroll, 1);

      const borderWidth = scrollProgress * 100;
      pageContent.style.setProperty('--border-width', `${borderWidth}%`);
    }
  }
}
