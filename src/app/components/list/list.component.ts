import { Component, Input, Output, EventEmitter } from '@angular/core';
import parse from 'date-fns/parse';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input() title: string
  @Input() listData: any

  @Output() change = new EventEmitter()

  page = 1

  constructor() {
    console.log(this.page)
  }
  
  getImage(path){
    return "https://image.tmdb.org/t/p/w500" + path
  }
  
  getNameWithoutSpace(name: string){
    return name.replace(/\s/g, '').toLowerCase()
  }
  
  stringToDate(string){
    return parse(string, 'yyyy-mm-dd', new Date())
  }
  
  onChange(){
    this.change.emit(this.page + 1)

  }

}
