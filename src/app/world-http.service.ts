import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


@Injectable()
export class WorldHttpService {
  public allCountries;
  public currentCountry;
  public capital;
  public baseUrl = 'https://restcountries.eu/rest/v2';
  
  constructor(private _http: HttpClient) {
    console.log("world-http service is called")
  }
 
   public getAllCountries(currentCountry): Observable<any> {
    let myResponse = this._http.get(this.baseUrl+ '/region'+ '/' +currentCountry);
    console.log(myResponse);
    return myResponse;
  }

  public getSingleCountries(country): Observable<any> {
    let myResponse = this._http.get(this.baseUrl+ '/name'+ '/' +country);
    console.log(myResponse);
    return myResponse;
  }
  
  goToCountryUsingCode(code){
    return this._http.get(`${this.baseUrl}/alpha/${code}`)
  }

  public getCountriesUsingCurrency(code): Observable<any>{
    let myResponse= this._http.get(this.baseUrl+ '/currency'+ '/' +code);
    console.log(myResponse);
    return myResponse;
    
}

getCountriesUsingLanguage(code){
  return this._http.get(`${this.baseUrl}/lang/${code}`)
}

}
