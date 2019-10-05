import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  title: string = "Search"
  searchState: Observable<{shows: any}>

  constructor(
    public activatedRoute: ActivatedRoute,
    private store: Store<{shows: any}>) { }

  ngOnInit() {
    this.store.select("shows").subscribe( state => this.searchState = state.searchShows)

  }

}
