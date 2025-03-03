import { AfterViewChecked, ChangeDetectorRef, Component, ElementRef, Renderer2, ViewChild } from '@angular/core';


interface CarouselItem {
  imageSrc: string;
  title: string;
  topic: string;
  description: string;
  details: { title: string; description: string };
}

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})


export class ServicesComponent implements AfterViewChecked {
  @ViewChild('carousel') carousel!: ElementRef;
  @ViewChild('listHTML') listHTML!: ElementRef;

  carouselItems: CarouselItem[] = [
    {
      imageSrc: 'assets/Image/Services/icons8-satellite-signal-100 (1).png',
      title: 'Image Processing',
      topic: 'Service',
      description:
        'Our experts provides a wide range of high-quality professional custom satellite...',
      details: {
        title: 'Image Processing',
        description: `Our experts provides a wide range of high-quality professional custom
satellite, SAR, elevation and vector mapping services, with end-to-end
capability from data acquisition, to data processing, to data analysis.`,
      },
    },
    {
      imageSrc: 'assets/Image/Services/icons8-computer-100.png',
      title: 'Applications Development',
      topic: 'Service',
      description:
        'We have the knowledge and skills to build reliable, scalable...',
      details: {
        title: 'Applications Development',
        description: `We have the knowledge and skills to build reliable, scalable, and
feature-rich applications using AI and enterprise-ready configurations.`,
      },
    },
    {
      imageSrc: 'assets/Image/Services/tripod_2738993.png',
      title: 'Land Survey',
      topic: 'Service',
      description:
        'We have the innovative technology and modern equipment...',
      details: {
        title: 'Land Survey',
        description: `We have the innovative technology and modern equipment, where
we can do land survey and with high accuracy and to the highest
possible quality.`,
      },
    },
    {
      imageSrc: 'assets/Image/Services/analysis_1376523.png',
      title: 'Training',
      topic: 'Service',
      description:
        'We train you at all levels, both product-related and methodically...',
      details: {
        title: 'Training',
        description: `We train you at all levels, both product-related and methodically.
Each training is individually designed for the participants, adapted to
previous knowledge and requirements.`,
      },
    },
    
  ];

  carousel2 : CarouselItem[] = [];



  selectedItem: any = null;
  selectedItemservices: any = null;
  showDetail = false;
  private isAnimating = false;
  private listenersAttached = false;

  constructor(private renderer: Renderer2, private cdr: ChangeDetectorRef) {}
  ngAfterViewChecked() {
    if (this.selectedItem && !this.listenersAttached) {
      this.initButtons();
      this.listenersAttached = true;
    }
  }

  onSeeMore(item: any): void {
    this.carousel2 = [...this.carouselItems];
    const index = this.carouselItems.indexOf(item);
    this.cdr.detectChanges();
    setTimeout(() => {
      this.initButtons();
    }, 0);
    if (index > -1) {
      this.carousel2.splice(index, 1);
      this.carousel2.splice(1, 0, item);
    }
    this.selectedItem = 1;
  }

  closeModal(): void {
    this.selectedItem = null;
    this.listenersAttached = false;
    this.carousel2 = [];
  }

  private initButtons() {
    const buttons = ['prev', 'next', 'back'];
    buttons.forEach((btnId) => {
      const btn = this.carousel.nativeElement.querySelector(`#${btnId}`);
      if (btn) {
        this.renderer.listen(btn, 'click', () => this.handleButtonClick(btnId));
      } else {
        console.warn(`الزر #${btnId} غير موجود`);
      }
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
        this.closeModal();
        break;
    }
  }


  private handleNavigation(direction: 'prev' | 'next') {
    if (this.isAnimating) return;

    this.isAnimating = true;
    const list = this.listHTML.nativeElement;
    const items = list.children;

    if (items.length < 1) {
      this.isAnimating = false;
      return;
    }

    Array.from(items as HTMLCollectionOf<HTMLElement>).forEach(
      (item: HTMLElement) => {
        item.style.animation = '';
        item.style.transform = '';
        item.style.filter = '';
        item.style.opacity = '';
      }
    );
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
      this.selectedItem = null;
    }
    this.showDetail = show;
  }

}
