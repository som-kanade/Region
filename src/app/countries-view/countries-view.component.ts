import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { WorldService } from '../world.service';
import { WorldHttpService } from '../world-http.service';
import { Subscription } from 'rxjs/Subscription';


@Component({
  selector: 'app-countries-view',
  templateUrl: './countries-view.component.html',
  styleUrls: ['./countries-view.component.css'],
  providers: [Location]
})
export class CountriesViewComponent implements OnInit,OnDestroy {
public allCountries;
 
  public countries;
  subCurrency: Subscription;
  currencyFilter: boolean = false;
  languageFilter: boolean = false;
  titlePreText : string;
  title : string;
  region: string;
  constructor(private _route:ActivatedRoute, private router: Router,public worldHttpService: WorldHttpService) { 
    console.log("constructor is called");
  }

  ngOnInit() {
    this.subCurrency = this._route.queryParams
    .subscribe(
      params => {
        if (params["currency"]) {
          this.currencyFilter = true
          this.getCountriesByCurrency(params["currency"])
          this.titlePreText = "Countries with currency"
          this.title = params["name"]
         
        } else if(params["language"]){
          this.languageFilter = true
          this.getCountriesByLanguage(params["language"])
          this.titlePreText = "Countries with language"
          this.title = params["name"]
        } else {
          this.currencyFilter = false
          this.region = this._route.snapshot.paramMap.get("region")
          this.titlePreText = "Countries in"
          this.title = this.region
          console.log(this.region)
          

          this.worldHttpService.getAllCountries(this.region).subscribe(
            data=>{
              console.log(data);
              this.allCountries = data;
            },
            error =>{
              console.log("some error occured");
              console.log(error.errorMessage)
            }
            
          )
          console.log(this.allCountries);
        }
      }
    )

    
    /*console.log("ngOnInitCalled");
    //getting region name from the route
    let countries = this._route.snapshot.paramMap.get('region');
    console.log(countries);
  //this.worldHttpService.getAllCountries(countries);*/
  
 
 
 
}
  


  getCountriesByCurrency(code){
    this.worldHttpService.getCountriesUsingCurrency(code)
      .subscribe(
        (data : any[]) => {
          this.allCountries = data
          console.log(this.allCountries);
        }
      )
  }

  getCountriesByLanguage(code){
    this.worldHttpService.getCountriesUsingLanguage(code)
      .subscribe(
        (data : any[]) => {
          this.allCountries = data
          console.log(this.allCountries)
        }
      )
  }




  ngOnDestroy() {
    console.log("Countries Component OnDestroyCalled");
  }

  
}
