import { Component, Input } from '@angular/core';
import parse from 'date-fns/parse';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() title: string
  @Input() listData: any[]

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

}
