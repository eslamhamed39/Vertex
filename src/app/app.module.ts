import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecaptchaModule } from 'ng-recaptcha';
import { AboutComponent } from './about/about.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { NotfoundComponent } from './notfound/notfound.component';
import { About2Component } from './about2/about2.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    NotfoundComponent,
    About2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RecaptchaModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faYoutube);  // Add the YouTube icon to the library
  }
}
