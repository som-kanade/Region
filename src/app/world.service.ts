import { Injectable } from '@angular/core';

@Injectable()
export class WorldService {
public allCountries;
  

   public currentCountry;

   constructor() {
    console.log("service constructor called");
   }
   //method to return all the countries
   public getAllCountries():any{
     return this.getAllCountries;
   }

  public getCountries(currentCountry): any{
    for(let country of this.allCountries){
      if(country.region == currentCountry){
        this.currentCountry = country;
      }
    }
    return this.currentCountry;
  }
}
