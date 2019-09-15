import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';

@Component({
  selector: 'mostpopular',
  templateUrl: './mostpopular.component.html',
  styleUrls: ['./mostpopular.component.css']
})
export class MostPopularComponent implements OnInit {

  mostPopular: any[]
  title: string = "Most Popular TV Shows"

  constructor(private tvShowServive: TvshowsService) { }

  ngOnInit() {
    this.tvShowServive.getMostPopular()
      .subscribe( (res: any) => {
        console.log(res)
        this.mostPopular = res.results
      })
  }

}
