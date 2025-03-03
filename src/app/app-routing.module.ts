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


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'what-we-do', component: WhatwedoComponent },
  { path: 'Solution', component: SolutionComponent },
  { path: 'Services', component: ServicesComponent },
  { path: 'Training', component: TrainingComponent },
  { path: 'Contact', component: ContactComponent },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
