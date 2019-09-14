import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';

@Component({
  selector: 'top-rated-list',
  templateUrl: './top-rated-list.component.html',
  styleUrls: ['./top-rated-list.component.css']
})
export class TopRatedListComponent implements OnInit {

  topRatedList: any[] = []

  constructor(private tvshowService: TvshowsService) { }

  getImage(path){
    return "https://image.tmdb.org/t/p/w500" + path
  }

  ngOnInit() {
    this.tvshowService.getTopRated()
      .subscribe( (res: any) => {
        console.log(res)
        this.topRatedList = res.results
      })
  }

}
