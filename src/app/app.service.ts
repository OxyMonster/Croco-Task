import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) { }


  getAllData() {
    const apiURL = 'https://www.lionsbet.com/rest/market/categories'; 

    return this.http.get(apiURL); 

  }; 

}
