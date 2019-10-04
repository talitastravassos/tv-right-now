import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DateFnsModule } from 'ngx-date-fns';
import { NgxSpinnerModule } from "ngx-spinner";
import { MatInputModule, MatFormFieldModule, MatIconModule } from '@angular/material'

import { StoreModule } from '@ngrx/store';
import { ShowsReducer } from './store/reducers';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { SearchComponent } from './components/search/search.component';
import { ResultComponent } from './pages/result/result.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { FooterComponent } from './components/footer/footer.component';
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
    ShowCardComponent,
    SearchComponent,
    ResultComponent,
    SpinnerComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule,
    MatInputModule, 
    MatFormFieldModule,
    MatIconModule,
    DateFnsModule.forRoot(),
    StoreModule.forRoot({shows: ShowsReducer}),
    NgxSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
