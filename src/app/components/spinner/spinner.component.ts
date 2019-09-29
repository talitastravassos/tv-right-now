import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(private spinner: NgxSpinnerService) { }

  ngOnInit() {
     /** spinner starts on init */
     this.spinner.show();

     setTimeout(() => {
       /** spinner ends after 0.7 seconds */
       this.spinner.hide();
     }, 700);
   }
}

