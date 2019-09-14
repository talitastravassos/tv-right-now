import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';

@Component({
  selector: 'most-popular-list',
  templateUrl: './most-popular-list.component.html',
  styleUrls: ['./most-popular-list.component.css']
})
export class MostPopularListComponent implements OnInit {

  
  popularList: any[] = []

  constructor(private tvshowService: TvshowsService) { }

  getImage(path){
    return "https://image.tmdb.org/t/p/w500" + path
  }

  getNameWithoutSpace(name){
    return name.replace(/\s/g, '')
  }

  ngOnInit() {
    this.tvshowService.getMostPopular()
      .subscribe( (res: any) => {
        this.popularList = res.results
      })
  }

}
