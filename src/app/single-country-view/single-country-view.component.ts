import { Component, OnInit, OnDestroy } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { WorldHttpService } from '../world-http.service';
@Component({
  selector: 'app-single-country-view',
  templateUrl: './single-country-view.component.html',
  styleUrls: ['./single-country-view.component.css']
})
export class SingleCountryViewComponent implements OnInit,OnDestroy {

  public singleCountry;
public country;

  constructor(private _route:ActivatedRoute, private router: Router,public worldHttpService: WorldHttpService) { 
    console.log("constructor is called");
  }

  ngOnInit() {
    console.log("ngOnInitCalled");
    //getting region name from the route
    let country = this._route.snapshot.paramMap.get('name');
    console.log(country);
  //this.worldHttpService.getAllCountries(countries);

  this.worldHttpService.getSingleCountries(country).subscribe(
    data=>{
      console.log(data);
      this.singleCountry = data;
    },
    error =>{
      console.log("some error occured");
      console.log(error.errorMessage)
    }
  )
  }

  goToCountry(countryCode){
    this.worldHttpService.goToCountryUsingCode(countryCode).subscribe(
      (data : any) => {
        this.router.navigate([`/single-country-view/${data.name}`])
      }
    )
  }


  ngOnDestroy(){
    console.log("Countries Component OnDestroyCalled");
  }
}
