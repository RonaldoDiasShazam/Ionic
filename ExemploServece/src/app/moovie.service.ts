import { Injectable } from '@angular/core';

import{ Http } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable({
  providedIn: 'root'
})
export class MoovieService {
  private baseApiPath = "https://stats.nba.com";

  constructor(public http: Http) {
    console.log('Hello MoovieService Service');
   }
   
   getLatestMovies(){
     return this.http.get(this.baseApiPath + "/stats/homepageleaders");
   }


}
