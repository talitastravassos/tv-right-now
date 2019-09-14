import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';

@Component({
  selector: 'up-coming-list',
  templateUrl: './up-coming-list.component.html',
  styleUrls: ['./up-coming-list.component.css']
})
export class UpComingListComponent implements OnInit {

  
  upComingList: any[] = []

  constructor(private tvshowService: TvshowsService) { }

  getImage(path){
    return "https://image.tmdb.org/t/p/w500" + path
  }

  getNameWithoutSpace(name){
    return name.replace(/\s/g, '')
  }

  ngOnInit() {
    this.tvshowService.getUpComing()
      .subscribe( (res: any) => {
        this.upComingList = res.results
      })
  }

}
