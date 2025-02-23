import {
  Component,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Renderer2,
} from '@angular/core';

interface CarouselItem {
  imageSrc: string;
  title: string;
  topic: string;
  description: string;
  details: {
    title: string;
    description: string;
  };
}

@Component({
  selector: 'app-solution',
  templateUrl: './solution.component.html',
  styleUrls: ['./solution.component.css'],
})
export class SolutionComponent implements AfterViewInit {
  @ViewChild('carousel', { static: true }) carousel!: ElementRef;
  @ViewChild('listHTML', { static: true }) listHTML!: ElementRef;

  carouselItems: CarouselItem[] = [
    {
      imageSrc: 'assets/Image/Solution/mining.png',
      title: 'Mining',
      topic: 'Solutions',
      description:
        'Empower the mine exploration process with the ability to monitor...',
      details: {
        title: 'Mining',
        description: `Empower the mine exploration process with the ability to monitor,
manage and analyze the expansion and detect illegal activities on the
surface.`,
      },
    },
    {
      imageSrc: 'assets/Image/Solution/smart_city.png',
      title: 'Smart Cities',
      topic: 'Solutions',
      description:
        'True smart cities can achieve connectivity between systems...',
      details: {
        title: 'Smart Cities',
        description: `True smart cities can achieve connectivity between systems,
collaboration between teams, and greater intelligence in operations,
which leads to sustainable solutions and more accountable citizen
services.`,
      },
    },
    {
      imageSrc: 'assets/Image/Solution/public-safety2.png',
      title: 'Public Safety',
      topic: 'Solutions',
      description:
        'Improve the quality, accuracy and availability of critical information...',
      details: {
        title: 'Public Safety',
        description: `TImprove the quality, accuracy and availability of critical information
with integrated technology solutions that enhance public safety and
security performance and productivity.`,
      },
    },
    {
      imageSrc: 'assets/Image/Solution/agriculture2.png',
      title: 'Agriculture',
      topic: 'Solutions',
      description:
        'AI-powered feature extraction for crop inventories, mapping and...',
      details: {
        title: 'Agriculture',
        description: `AI-powered feature extraction for crop inventories, mapping and
analysis solutions that help farmers create precise and predictive
agriculture operations, maximizing the use of land with minimal
resources using satellite images.`,
      },
    },
    {
      imageSrc: 'assets/Image/Solution/Land_mangement(2).png',
      title: 'Land Management',
      topic: 'Solutions',
      description:
        'Understanding the patterns of new construction and traffic...',
      details: {
        title: 'Land Management',
        description: `Understanding the patterns of new construction and traffic in a
rapidly growing country to differentiate between illegal activities and
city expansion.`,
      },
    },
    {
      imageSrc: 'assets/Image/Solution/forest(1).png',
      title: 'Forestry',
      topic: 'Solutions',
      description:
        'Providing data-driven solutions to forestry professionals for improved...',
      details: {
        title: 'Forestry',
        description: `Providing data-driven solutions to forestry professionals for improved
decision-making and higher efficiency in detecting illegal logging,
calculate carbon stocks and all phases of the forestry cycle.`,
      },
    },
    {
      imageSrc: 'assets/Image/Solution/Water & Drought2.png',
      title: 'Water & Drought',
      topic: 'Solutions',
      description:
        'Collecting meteorological and remote sensing data (NDVI, rain, steam,temperature)...',
      details: {
        title: 'Water & Drought',
        description: `Collecting meteorological and remote sensing data (NDVI, rain, steam,
temperature) to build and implement spatial models for conducting
daily, monthly and annual analysis reports and publish them through
geospatial online portal to support decision-makers.`,
      },
    },
    {
      imageSrc: 'assets/Image/Solution/utilities.png',
      title: 'Utilities',
      topic: 'Solutions',
      description:
        'Ensure robust modeling, network planning and data quality by creating a digital...',
      details: {
        title: 'Utilities',
        description: `Ensure robust modeling, network planning and data quality by creating
a digital representation of your network, with all its associated assets
and the surrounding environment.`,
      },
    },
  ];
  showDetail = false;
  private isAnimating = false;

  constructor(private renderer: Renderer2) {}

  ngAfterViewInit() {
    this.initButtons();
    this.initSeeMoreButtons();
  }

  private initButtons() {
    const buttons = ['prev', 'next', 'back'];
    buttons.forEach((btnId) => {
      const btn = this.carousel.nativeElement.querySelector(`#${btnId}`);
      if (btn) {
        this.renderer.listen(btn, 'click', () => this.handleButtonClick(btnId));
      }
    });
  }

  private initSeeMoreButtons() {
    const buttons = this.carousel.nativeElement.querySelectorAll('.seeMore');
    buttons.forEach((btn: HTMLElement) => {
      this.renderer.listen(btn, 'click', () => this.toggleDetailView(true));
    });
  }

  private handleButtonClick(btnId: string) {
    if (this.isAnimating) return;

    switch (btnId) {
      case 'prev':
      case 'next':
        this.handleNavigation(btnId as 'prev' | 'next');
        break;
      case 'back':
        this.toggleDetailView(false);
        break;
    }
  }

  private handleNavigation(direction: 'prev' | 'next') {
    if (this.isAnimating) return;

    this.isAnimating = true;
    const list = this.listHTML.nativeElement;
    const items = list.children;

    if (items.length < 1) return;

    // إعادة تعيين الأنماط لجميع العناصر قبل تطبيق الرسوم المتحركة
    Array.from(items as HTMLCollectionOf<HTMLElement>).forEach(
      (item: HTMLElement) => {
        item.style.animation = '';
        item.style.transform = '';
        item.style.filter = ''; // إعادة تعيين الفلتر أيضًا
        item.style.opacity = ''; // إعادة تعيين الشفافية
      }
    );

    // تطبيق فئة الاتجاه
    this.renderer.addClass(this.carousel.nativeElement, direction);

    setTimeout(() => {
      if (direction === 'next') {
        const firstItem = items[0];
        this.renderer.appendChild(list, firstItem);
      } else if (direction === 'prev') {
        const lastItem = items[items.length - 1];
        this.renderer.insertBefore(list, lastItem, list.firstChild);
      }

      this.renderer.removeClass(this.carousel.nativeElement, direction);

      // إعادة تعيين الأنماط مرة أخرى بعد الرسوم المتحركة
      Array.from(items as HTMLCollectionOf<HTMLElement>).forEach(
        (item: HTMLElement) => {
          item.style.animation = '';
          item.style.transform = '';
          item.style.filter = '';
          item.style.opacity = '';
        }
      );

      this.isAnimating = false;
    }, 1100);
  }

  private toggleDetailView(show: boolean) {
    if (show) {
      this.renderer.addClass(this.carousel.nativeElement, 'showDetail');
    } else {
      this.renderer.removeClass(this.carousel.nativeElement, 'showDetail');
    }
    this.showDetail = show;
  }
}
