import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  state: any

  constructor(public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    
  }

}
