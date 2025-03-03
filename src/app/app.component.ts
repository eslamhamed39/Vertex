import { Component } from '@angular/core';
import { HomeComponent } from './Component/home/home.component';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Geomakani';
  // constructor(private router: Router) {
  //   this.router.events.subscribe(event => {
  //     if (event instanceof NavigationEnd) {
  //       window.location.reload();
  //     }
  //   });
  // }
  // constructor(private router: Router) {}

  // navigateWithReload(url: string) {
  //   this.router.navigateByUrl(url).then(() => {
  //     window.location.reload();
  //   });
  // }
}
