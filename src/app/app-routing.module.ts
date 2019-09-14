import { UpcomingComponent } from './pages/upcoming/upcoming.component';
import { MostpopularComponent } from './pages/mostpopular/mostpopular.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';


const routes: Routes = [
  { 
    path: "", 
    component: HomeComponent 
  },
  { 
    path: "mostpopular", 
    component: MostpopularComponent 
  },
  { 
    path: "upcoming", 
    component: UpcomingComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
