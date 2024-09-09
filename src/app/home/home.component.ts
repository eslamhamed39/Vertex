import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements AfterViewInit {
  ngAfterViewInit() {
    const setupHoverEffect = (elementId: string, imageClass: string, filterValue: string) => {
      const element = document.getElementById(elementId);
      const image = document.querySelector(imageClass) as HTMLElement;
  
      if (element && image) {
        element.addEventListener('mouseenter', () => {
          element.style.fontSize = '16px';
          element.style.fontWeight = '600';
          image.style.filter = 'none';
        });
  
        element.addEventListener('mouseleave', () => {
          element.style.fontSize = '';
          element.style.fontWeight = '';
          image.style.filter = filterValue;
        });
      }
    };
  
    setupHoverEffect('color_img', '.img_1', 'url(#wp-duotone-000000-7f7f7f-5)');
    setupHoverEffect('color_img2', '.img_2', 'url(#wp-duotone-000000-7f7f7f-6)');
    setupHoverEffect('color_img3', '.img_3', 'url(#wp-duotone-000000-7f7f7f-7)');
    setupHoverEffect('color_img4', '.img_4', 'url(#wp-duotone-000000-7f7f7f-8)');
    setupHoverEffect('color_img5', '.img_5', 'url(#wp-duotone-000000-7f7f7f-7)');
    setupHoverEffect('color_img6', '.img_6', 'url(#wp-duotone-000000-7f7f7f-8)');
    setupHoverEffect('color_img7', '.img_7', 'url(#wp-duotone-000000-7f7f7f-7)');
    setupHoverEffect('color_img8', '.img_8', 'url(#wp-duotone-000000-7f7f7f-8)');
  }


  captcha:string;
  email: string;
  constructor(){
    this.captcha = '';
    this.email = 'Secret@email.com';
  }
  resolved(captchaResponse: string) {
    this.captcha = captchaResponse;
    console.log('resolved captcha with response: ' + this.captcha);
}

}
