import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  airingToday: Observable<{shows: any}>
  title: string = "TV Shows Airing Today"

  constructor(
    private tvShowServive: TvshowsService,
    private store: Store<{shows: any}>) { }

  onPageChange(page){
    // console.log(page)
    this.tvShowServive.getAiringToday(page)  
    this.store.select("shows").subscribe( state => this.airingToday = state.airingToday)
  }

  ngOnInit() {
    this.tvShowServive.getAiringToday(1)
    this.store.select("shows").subscribe( state => this.airingToday = state.airingToday)
    
    this.store.select("shows").subscribe( state => console.log(state))  
      
  }
}
