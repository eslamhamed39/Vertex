import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouteReuseStrategy } from '@angular/router';
import { HomeComponent } from './Component/home/home.component';
import { AboutComponent } from './Component/about/about.component';
import { NotfoundComponent } from './Component/notfound/notfound.component';
import { WhatwedoComponent } from './Component/whatwedo/whatwedo.component';
import { SolutionComponent } from './Component/solution/solution.component';


const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'what-we-do', component: WhatwedoComponent },
  { path: 'Solution', component: SolutionComponent },
  { path: '**', component: NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
