import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  airingToday: any[]
  title: string = "TV Shows Airing Today"

  constructor(private tvShowServive: TvshowsService) { }

  ngOnInit() {
    this.tvShowServive.getAiringToday()
      .subscribe( (res: any) => {
        console.log(res)
        this.airingToday = res.results
      })
  }

}
