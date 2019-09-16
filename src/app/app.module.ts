import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateFnsModule } from 'ngx-date-fns';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavbarComponent } from './components/navbar/navbar.component';
import { TopRatedComponent } from './pages/top-rated/top-rated.component';
import { ShowDetailsComponent } from './components/show-details/show-details.component';
import { DetailsComponent } from './pages/details/details.component';
import { ListComponent } from './components/list/list.component';
import { HomeComponent } from './pages/home/home.component';
import { MostPopularComponent } from './pages/mostpopular/mostpopular.component';
import { UpComingComponent } from './pages/upcoming/upcoming.component';
import { ShowCardComponent } from './components/show-card/show-card.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    MostPopularComponent,
    UpComingComponent,
    TopRatedComponent,
    ShowDetailsComponent,
    DetailsComponent,
    ListComponent,
    ShowCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    NgbModule,
    DateFnsModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
