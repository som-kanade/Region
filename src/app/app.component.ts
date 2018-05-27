import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private _route:ActivatedRoute, private router: Router,private location: Location) {}

  goBack() {
    this.location.back()
  }
}
