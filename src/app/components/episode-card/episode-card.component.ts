import { Component, OnInit, Input } from '@angular/core';
import { parse, getYear } from 'date-fns';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'episode-card',
  templateUrl: './episode-card.component.html',
  styleUrls: ['./episode-card.component.css']
})
export class EpisodeCardComponent implements OnInit {

  @Input() episode: any = {};
  @Input() title: string;

  constructor(
    private store: Store<{shows: any}>) { }

  getImage(path) {
    if (path === null) {
      return 'https://www.nilfiskcfm.com/wp-content/uploads/2016/12/placeholder.png';
    }

    return 'https://image.tmdb.org/t/p/w500' + path;
  }

  stringToDate(string) {
    return parse(string, 'yyyy-mm-dd', new Date());
  }

  ngOnInit() {
    // this.store.select('shows').subscribe( state => this.showDetails = state.showDetails);
  }

}
