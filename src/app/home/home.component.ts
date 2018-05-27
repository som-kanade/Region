import { Component, OnInit, OnDestroy } from '@angular/core';
import { WorldService } from '../world.service';
import {WorldHttpService} from '../world-http.service';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
  
})
export class HomeComponent implements OnInit,OnDestroy {

  public allCountries;
  
  constructor(private _route:ActivatedRoute, private router: Router,private location: Location) {
    console.log("Home component constructor called");
   }

  ngOnInit() {

    console.log("Home component OnInit called");
    //this.allCountries = this.worldHttpService.getAllCountries();
    
  }

  goBack() {
    this.location.back()
  }


  ngOnDestroy(){
    console.log("Home component destroyed");
  }

}
