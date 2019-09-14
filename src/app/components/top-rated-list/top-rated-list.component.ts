import parse from 'date-fns/parse';
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

  getNameWithoutSpace(name){
    return name.replace(/\s/g, '')
  }

  stringToDate(string){
    return parse(string, 'yyyy-mm-dd', new Date())
  }

  ngOnInit() {
    this.tvshowService.getTopRated()
      .subscribe( (res: any) => {
        console.log(res)
        this.topRatedList = res.results
      })
  }

}
