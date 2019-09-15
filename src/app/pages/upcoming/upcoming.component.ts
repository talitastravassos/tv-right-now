import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';

@Component({
  selector: 'upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})
export class UpComingComponent implements OnInit {

  upComing: any
  title: string = "Up Coming This Week"

  constructor(private tvShowServive: TvshowsService) { }

  onPageChange(page){
    console.log(page)
    this.tvShowServive.getUpComing(page)
      .subscribe( (res: any) => {
        console.log(res)
        this.upComing = res
    })
  }

  ngOnInit() {
    this.tvShowServive.getUpComing(1)
      .subscribe( (res: any) => {
        console.log(res)
        this.upComing = res
      })
  }

}
