import { Component, OnInit } from '@angular/core';
import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  id: number;
  showCredits: Observable<{shows: any}>;

  constructor(
    private tvshowService: TvshowsService,
    private activateRoute: ActivatedRoute) { }

  getImage(path) {
    return 'https://image.tmdb.org/t/p/w780' + path;
  }

  ngOnInit() {
    this.activateRoute.paramMap // get id from param
    .subscribe(param => {
      console.log(param);
      this.id = +param.get('id');
    });

    this.tvshowService.getDetails(this.id);
    this.tvshowService.getCreditsDetails(this.id);

  }
}
