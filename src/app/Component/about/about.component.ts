import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';





@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
})
export class AboutComponent implements OnInit {


  constructor(private el: ElementRef, private router: Router) { }

  ngOnInit() {
    this.updateBorder(); // تحديث الحد عند تحميل الصفحة
  }

  navigateWithReload(url: string) {
    this.router.navigateByUrl(url).then(() => {
      window.location.reload();
    });
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.updateBorder();
  }

  updateBorder() {
    const pageContent = document.getElementById('page-nav');
    if (pageContent) {
      const scrollPosition = window.scrollY;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollProgress = Math.min(scrollPosition / maxScroll, 1); // نسبة التمرير

      const borderWidth = scrollProgress * 100; // حساب العرض بالنسبة للتمرير

      pageContent.style.setProperty('--border-width', `${borderWidth}%`);
    }
  }
}
