import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { WhatwedoComponent } from './Component/whatwedo/whatwedo.component';
import { SolutionComponent } from './Component/solution/solution.component';
import { ServicesComponent } from './Component/services/services.component';
import { TrainingComponent } from './Component/training/training.component';
import { ContactComponent } from './Component/contact/contact.component';
import { ProductComponent } from './Component/product/product.component';
import { LoginComponent } from './Component/login/login.component';
import { BlogmanageComponent } from './Component/blogmanage/blogmanage.component';
import { BlogsViewComponent } from './Component/blogs-view/blogs-view.component';
import { BlogDetailComponent } from './Component/blog-detail/blog-detail.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'what-we-do', component: WhatwedoComponent },
  { path: 'Solution', component: SolutionComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'Training', component: TrainingComponent },
  { path: 'Contact', component: ContactComponent },
  { path: 'Product', component: ProductComponent },
  { path: 'Login', component: LoginComponent },
  { path: 'Dashbord', component: LoginComponent },
  { path: 'Blog', component: BlogsViewComponent },
  { path: 'BlogManagment', component: BlogmanageComponent},
  // { path: 'blog/:id', component: BlogDetailComponent },
  { path: 'Blog/:id', component: BlogDetailComponent}, // Create BlogDetailComponent if needed
  // { path: 'BlogDetail', component: BlogDetailComponent },
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload', initialNavigation: 'enabledBlocking' })],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
