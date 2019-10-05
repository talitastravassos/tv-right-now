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
    return 'https://image.tmdb.org/t/p/w780' + path;
  }

  ngOnInit() {
  }

}
