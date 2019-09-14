import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';
import { ActivatedRoute } from '@angular/router';
import parse from 'date-fns/parse'

@Component({
  selector: 'show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  id: number
  show: any

  constructor(
    private tvshowService: TvshowsService,
    private activateRoute: ActivatedRoute) { }

  getShow(id){
    this.tvshowService.getDetails(id)
      .subscribe( (res: any) => {
        console.log(res)
        this.show = res
      })
  }
  
  getImage(path){
    return "https://image.tmdb.org/t/p/w780" + path
  }

  stringToDate(string){
    return parse(string, 'yyyy-mm-dd', new Date())
  }

  ngOnInit() {
    this.activateRoute.paramMap //get id from param
      .subscribe(param => {
        console.log(param)
        this.id = +param.get("id")
      })

    this.tvshowService.getDetails(this.id)
      .subscribe( (res: any) => {
        console.log(res)
        this.show = res
      })  

    // this.getShow(this.id)
    // console.log(this.show)

  }

}

