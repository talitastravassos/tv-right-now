import { TvshowsService } from './../../services/tvshows/tvshows.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store, State } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  title: string = "Results"
  searchState: Observable<{shows: any}>

  constructor(
    public activatedRoute: ActivatedRoute,
    private tvshowsService: TvshowsService,
    private store: Store<{shows: any}>) { }

  ngOnInit() {
    this.store.select("shows").subscribe( state => this.searchState = state)

    console.log(this.searchState)
    
  }

}
