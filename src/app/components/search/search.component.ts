import { TvshowsService } from 'src/app/services/tvshows/tvshows.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  searchForm: FormGroup

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tvshowService: TvshowsService) { }

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ""
    })

    this.searchForm.valueChanges.subscribe( res => {
      this.tvshowService.search(res.search, 1)
        .subscribe( res => {
          console.log("search: ", res)
          this.router.navigate(['/search'])
        })
      // console.log(res)
    })
  }

}
