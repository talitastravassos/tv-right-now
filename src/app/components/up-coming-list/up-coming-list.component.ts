import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';
import parse from 'date-fns/parse/index';

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

  stringToDate(string){
    return parse(string, 'yyyy-mm-dd', new Date())
  }

  ngOnInit() {
    this.tvshowService.getUpComing()
      .subscribe( (res: any) => {
        this.upComingList = res.results
      })
  }

}
