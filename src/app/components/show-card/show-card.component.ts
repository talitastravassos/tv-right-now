import { Component, OnInit, Input, Output } from '@angular/core';
import { parse, getYear } from 'date-fns';


@Component({
  selector: 'show-card',
  templateUrl: './show-card.component.html',
  styleUrls: ['./show-card.component.css']
})
export class ShowCardComponent implements OnInit {

  @Input() show: any = {}

  constructor() { }

  getImage(path){
    if(path === null){
      return "https://www.nilfiskcfm.com/wp-content/uploads/2016/12/placeholder.png"
    }
    
    return "https://image.tmdb.org/t/p/w500" + path
  }
  
  getNameWithoutSpace(name: string){
    return name.replace(/\s/g, '').toLowerCase()
  }
  
  stringToDate(string){
    return getYear(parse(string, 'yyyy-mm-dd', new Date()))
  }

  ngOnInit() {
  }

}
