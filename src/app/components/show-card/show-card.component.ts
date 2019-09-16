import { Component, OnInit, Input, Output } from '@angular/core';
import parse from 'date-fns/parse';

@Component({
  selector: 'show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {

  @Input() show: any = {}

  constructor() { }

  getImage(path){
    return "https://image.tmdb.org/t/p/w500" + path
  }
  
  getNameWithoutSpace(name: string){
    return name.replace(/\s/g, '').toLowerCase()
  }
  
  stringToDate(string){
    return parse(string, 'yyyy-mm-dd', new Date())
  }

  ngOnInit() {
  }

}
