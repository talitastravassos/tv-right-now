import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';

@Component({
  selector: 'top-rated',
  templateUrl: './top-rated.component.html',
  styleUrls: ['./top-rated.component.css']
})
export class TopRatedComponent implements OnInit {

  topRated: any
  title: string = "Top Rated"

  constructor(private tvShowServive: TvshowsService) { }

  onPageChange(page){
    console.log(page)
    this.tvShowServive.getTopRated(page)
      .subscribe( (res: any) => {
        console.log(res)
        this.topRated = res
    })
  }

  ngOnInit() {
    this.tvShowServive.getTopRated(1)
      .subscribe( (res: any) => {
        console.log(res)
        this.topRated = res
      })
  }

}
