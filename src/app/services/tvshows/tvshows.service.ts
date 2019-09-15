import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TvshowsService {

  private base_url = "https://api.themoviedb.org/3/tv/"
  private api_key = "5f79797eded17e8dd6a8b2f47eb10756"

  constructor(private http: HttpClient) { }

  getAiringToday(page: number){
    return this.http.get(`${this.base_url}airing_today?api_key=${this.api_key}&page=${page}`)
  }

  getMostPopular(page: number){
    return this.http.get(`${this.base_url}popular?api_key=${this.api_key}&page=${page}`)
  }

  getUpComing(page: number){
    return this.http.get(`${this.base_url}on_the_air?api_key=${this.api_key}&page=${page}`)
  }

  getTopRated(page: number){
    return this.http.get(`${this.base_url}top_rated?api_key=${this.api_key}&page=${page}`)
  }

  getDetails(id){
    return this.http.get(`${this.base_url}${id}?api_key=${this.api_key}`)
  }


  /* LocalStorage*/

  setId(id){
    localStorage.setItem("showID", JSON.stringify(id))
  }

  getId(){
    return JSON.parse(localStorage.getItem("showID"))
  }


}
