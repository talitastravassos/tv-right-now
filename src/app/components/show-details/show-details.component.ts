import { Component, OnInit } from '@angular/core';
import { parse } from 'date-fns';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  showDetails: Observable<{shows: any}>;

  constructor(
    private store: Store<{shows: any}>) { }

  getImage(path) {
    return 'https://image.tmdb.org/t/p/w780' + path;
  }

  // tslint:disable-next-line: variable-name
  stringToDate(string) {
    return parse(string, 'yyyy-mm-dd', new Date());
  }

  ngOnInit() {

    this.store.select('shows').subscribe( state => this.showDetails = state.showDetails);

  }

}

