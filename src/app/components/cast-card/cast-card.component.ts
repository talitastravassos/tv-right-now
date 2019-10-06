import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'cast-card',
  templateUrl: './cast-card.component.html',
  styleUrls: ['./cast-card.component.css']
})
export class CastCardComponent implements OnInit {

  @Input() star: any = {};

  constructor() { }

  getImage(path) {
    if(path === null){
      return "https://www.nilfiskcfm.com/wp-content/uploads/2016/12/placeholder.png";
    }
    return 'https://image.tmdb.org/t/p/w780' + path;
  }

  ngOnInit() {
  }

}
