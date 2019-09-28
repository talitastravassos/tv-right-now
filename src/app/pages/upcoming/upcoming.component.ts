import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpComingComponent implements OnInit {

  upComing: Observable<{shows: any}>
  title: string = "Up Coming This Week"

  constructor(
    private tvShowServive: TvshowsService,
    private store: Store<{shows: any}>) { }

  onPageChange(page){
    this.tvShowServive.getUpComing(page)
      
    this.store.select("shows").subscribe( state => this.upComing = state.upComing)
  }

  ngOnInit() {
    this.tvShowServive.getUpComing(1)
      
    this.store.select("shows").subscribe( state => this.upComing = state.upComing)
  }

}
