import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';
import { ActivatedRoute } from '@angular/router';
import { parse } from 'date-fns'
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  id: number
  showDetails: Observable<{shows: any}>

  constructor(
    private tvshowService: TvshowsService,
    private activateRoute: ActivatedRoute,
    private store: Store<{shows: any}>) { }
  
  getImage(path){
    return "https://image.tmdb.org/t/p/w780" + path
  }

  stringToDate(string){
    return parse(string, 'yyyy-mm-dd', new Date())
  }

  ngOnInit() {
    this.activateRoute.paramMap //get id from param
      .subscribe(param => {
        console.log(param)
        this.id = +param.get("id")
      })

      this.tvshowService.getDetails(this.id)
      this.store.select("shows").subscribe( state => this.showDetails = state.showDetails)

  }

}

