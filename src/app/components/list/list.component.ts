import { Component, Input, Output, EventEmitter } from '@angular/core';
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
  
  onChange(){
    this.change.emit(this.page + 1)

  }

}
