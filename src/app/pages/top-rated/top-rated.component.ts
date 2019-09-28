import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

  topRated: Observable<{shows: any}>
  title: string = "Top Rated"

  constructor(
    private tvShowServive: TvshowsService,
    private store: Store<{shows: any}>) { }

  onPageChange(page){
    this.tvShowServive.getTopRated(page)
      
    this.store.select("shows").subscribe( state => this.topRated = state.topRated)
  }

  ngOnInit() {
    this.tvShowServive.getTopRated(1)
      
    this.store.select("shows").subscribe( state => this.topRated = state.topRated)
  }

}
