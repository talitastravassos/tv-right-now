import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';

@Component({
  selector: 'top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

  topRated: any[]
  title: string = "Top Rated"

  constructor(private tvShowServive: TvshowsService) { }

  ngOnInit() {
    this.tvShowServive.getTopRated()
      .subscribe( (res: any) => {
        console.log(res)
        this.topRated = res.results
      })
  }

}
