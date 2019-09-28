import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';
import * as FetchActions from './../../store/actions';
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
    console.log(page)
    this.tvShowServive.getTopRated(page)
      .subscribe( (res: any) => {
        console.log(res)
        this.store.dispatch(new FetchActions.FetchTopRated(res))
        this.store.select("shows").subscribe( state => this.topRated = state.topRated)
        
    })
  }

  ngOnInit() {
    this.tvShowServive.getTopRated(1)
      .subscribe( (res: any) => {
        console.log(res)
        this.store.dispatch(new FetchActions.FetchTopRated(res))
        this.store.select("shows").subscribe( state => this.topRated = state.topRated)
      })
  }

}
