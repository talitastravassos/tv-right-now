import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'mostpopular',
  templateUrl: './mostpopular.component.html',
  styleUrls: ['./mostpopular.component.css']
})
export class MostPopularComponent implements OnInit {

  mostPopular: Observable<{shows: any}>
  title: string = "Most Popular TV Shows"

  constructor(
    private tvShowServive: TvshowsService,
    private store: Store<{shows: any}>) { }

  onPageChange(page){
    this.tvShowServive.getMostPopular(page)
      
    this.store.select("shows").subscribe( state => this.mostPopular = state.mostPopular)
  }

  ngOnInit() {
    this.tvShowServive.getMostPopular(1)
      
    this.store.select("shows").subscribe( state => this.mostPopular = state.mostPopular)
  }

}
