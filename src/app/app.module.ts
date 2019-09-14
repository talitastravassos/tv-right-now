import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { MostPopularComponent } from './pages/mostpopular/mostpopular.component';
import { UpComingComponent } from './pages/upcoming/upcoming.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AiringTodayListComponent } from './components/airing-today-list/airing-today-list.component';
import { MostPopularListComponent } from './components/most-popular-list/most-popular-list.component';
import { UpComingListComponent } from './components/up-coming-list/up-coming-list.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { TopRatedListComponent } from './components/top-rated-list/top-rated-list.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MostPopularComponent,
    UpComingComponent,
    AiringTodayListComponent,
    MostPopularListComponent,
    UpComingListComponent,
    TopRatedComponent,
    TopRatedListComponent,
    ShowDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
