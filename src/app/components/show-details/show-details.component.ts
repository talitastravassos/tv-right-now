import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'show-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.css']
})
export class ShowDetailsComponent implements OnInit {

  id: number
  show: any = {}

  constructor(
    private tvshowService: TvshowsService,
    private activateRoute: ActivatedRoute,
    private route: Router) { }

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

