import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'list-cast',
  templateUrl: './list-cast.component.html',
  styleUrls: ['./list-cast.component.css']
})
export class ListCastComponent implements OnInit {
  showCredits: Observable<{shows: any}>;

  constructor(private store: Store<{shows: any}>) { }

  ngOnInit() {
    this.store.select('shows').subscribe( state => this.showCredits = state.showCredits);
    console.log(this.showCredits)
  }

}
