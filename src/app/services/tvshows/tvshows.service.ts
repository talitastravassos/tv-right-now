import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import * as FetchActions from './../../store/actions';
import { Store } from '@ngrx/store';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

  private base_url = "https://api.themoviedb.org/3/"
  private api_key = "5f79797eded17e8dd6a8b2f47eb10756"

  constructor(
    private http: HttpClient,
    private store: Store<{shows: any}>) { }

  getAiringToday(page: number){
    this.http.get(`${this.base_url}tv/airing_today?api_key=${this.api_key}&page=${page}`)
      .subscribe( (res: any) => {
        console.log(res)
        this.store.dispatch(new FetchActions.FetchAiringToday(res))
    })
  }

  getMostPopular(page: number){
    this.http.get(`${this.base_url}tv/popular?api_key=${this.api_key}&page=${page}`)
    .subscribe( (res: any) => {
      console.log(res)
      this.store.dispatch(new FetchActions.FetchMostPopular(res))
    })
  }

  getUpComing(page: number){
    this.http.get(`${this.base_url}tv/on_the_air?api_key=${this.api_key}&page=${page}`)
      .subscribe( (res: any) => {
        console.log(res)
        this.store.dispatch(new FetchActions.FetchUpComing(res))
      })
  }

  getTopRated(page: number){
    this.http.get(`${this.base_url}tv/top_rated?api_key=${this.api_key}&page=${page}`)
      .subscribe( (res: any) => {
        console.log(res)
        this.store.dispatch(new FetchActions.FetchTopRated(res))
      })
  }

  getDetails(id){
    this.http.get(`${this.base_url}tv/${id}?api_key=${this.api_key}`)
      .subscribe( (res: any) => {
        console.log(res)
        this.store.dispatch(new FetchActions.FetchShowDetails(res))
      })
  }

  getCreditsDetails(id){
    this.http.get(`${this.base_url}tv/${id}/credits?api_key=${this.api_key}`)
      .subscribe( (res: any) => {
        console.log(res)
        this.store.dispatch(new FetchActions.FetchShowCredits(res))
      })
  }

  search(name, page){
    this.http.get(`${this.base_url}search/tv?api_key=${this.api_key}&query=${name}&page=${page}`)
      .subscribe( (res: any) => {
        console.log("search: ", res)
        this.store.dispatch(new FetchActions.FetchSearch(res))
      })
  }


  /* LocalStorage*/

  setId(id){
    localStorage.setItem("showID", JSON.stringify(id))
  }

  getId(){
    return JSON.parse(localStorage.getItem("showID"))
  }


}
