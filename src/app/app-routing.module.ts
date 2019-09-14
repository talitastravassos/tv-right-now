import { UpComingComponent } from './pages/upcoming/upcoming.component';
import { MostPopularComponent } from './pages/mostpopular/mostpopular.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';


const routes: Routes = [
  { 
    path: "", 
    component: HomeComponent 
  },
  { 
    path: "mostpopular", 
    component: MostPopularComponent 
  },
  { 
    path: "upcoming", 
    component: UpComingComponent 
  },
  { 
    path: "toprated", 
    component: TopRatedComponent 
  },
  { 
    path: "details/:name/:id", 
    component: ShowDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
