import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './Component/home/home.component';
import { FooterComponent } from './Component/footer/footer.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RecaptchaModule } from 'ng-recaptcha';
import { AboutComponent } from './Component/about/about.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
import { WhatwedoComponent } from './Component/whatwedo/whatwedo.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { EarthComponent } from './Component/earth/earth.component';
import { SolutionComponent } from './Component/solution/solution.component';
import { ServicesComponent } from './Component/services/services.component';
import { TrainingComponent } from './Component/training/training.component';
import { ContactComponent } from './Component/contact/contact.component';
import { Logo3dComponent } from './Component/logo3d/logo3d.component';
import { SendmailComponent } from './Component/sendmail/sendmail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastNotificationComponent } from './Component/toast-notification/toast-notification.component';
import { ProductComponent } from './Component/product/product.component';
import { PreloaderComponent } from './Component/preloader/preloader.component';
import { LoginComponent } from './Component/login/login.component';
import { DashbordComponent } from './Component/dashbord/dashbord.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogmanageComponent } from './Component/blogmanage/blogmanage.component';
import { BlogsViewComponent } from './Component/blogs-view/blogs-view.component';
import { BlogDetailComponent } from './Component/blog-detail/blog-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    AboutComponent,
    NotfoundComponent,
    WhatwedoComponent,
    NavbarComponent,
    EarthComponent,
    SolutionComponent,
    ServicesComponent,
    TrainingComponent,
    ContactComponent,
    Logo3dComponent,
    SendmailComponent,
    ToastNotificationComponent,
    ProductComponent,
    PreloaderComponent,
    LoginComponent,
    DashbordComponent,
    BlogmanageComponent,
    BlogsViewComponent,
    BlogDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RecaptchaModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary) {
    library.addIcons(faYoutube);  // Add the YouTube icon to the library
  }
}
