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

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MostPopularComponent,
    UpComingComponent,
    AiringTodayListComponent,
    MostPopularListComponent,
    UpComingListComponent
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
