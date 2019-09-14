import { TvshowsService } from './../../services/tvshows/tvshows.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'airing-today-list',
  templateUrl: './airing-today-list.component.html',
  styleUrls: ['./airing-today-list.component.css']
})
export class AiringTodayListComponent implements OnInit {

  todayList: any[] = []

  constructor(private tvshowService: TvshowsService) { }

  getImage(path){
    return "https://image.tmdb.org/t/p/w500" + path
  }

  getNameWithoutSpace(name){
    return name.replace(/\s/g, '')
  }

  ngOnInit() {
    this.tvshowService.getAiringToday()
      .subscribe( (res: any) => {
        this.todayList = res.results
        console.log(this.todayList)
      })

  }

}
