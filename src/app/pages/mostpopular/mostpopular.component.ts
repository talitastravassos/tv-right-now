import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';

@Component({
  selector: 'mostpopular',
  templateUrl: './mostpopular.component.html',
  styleUrls: ['./mostpopular.component.css']
})
export class MostPopularComponent implements OnInit {

  mostPopular: any
  title: string = "Most Popular TV Shows"

  constructor(private tvShowServive: TvshowsService) { }

  onPageChange(page){
    console.log(page)
    this.tvShowServive.getMostPopular(page)
      .subscribe( (res: any) => {
        console.log(res)
        this.mostPopular = res
    })
  }

  ngOnInit() {
    this.tvShowServive.getMostPopular(1)
      .subscribe( (res: any) => {
        console.log(res)
        this.mostPopular = res
      })
  }

}
