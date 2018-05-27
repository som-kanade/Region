import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { CountriesViewComponent } from './countries-view/countries-view.component';
import {SingleCountryViewComponent} from './single-country-view/single-country-view.component';
import { HomeComponent } from './home/home.component';
import {NotFoundComponent} from './not-found/not-found.component';
import { WorldService } from './world.service';
import { WorldHttpService } from './world-http.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CountriesViewComponent,
    SingleCountryViewComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path:'home',component: HomeComponent},
      {path:'',redirectTo:'home',pathMatch: 'full'},
      {path:'single-country-view/:name',component: SingleCountryViewComponent},
      {path: 'countries-view/:region',component: CountriesViewComponent},
      {path: 'countries-view/:code',component: CountriesViewComponent},
      {path:'**',component:NotFoundComponent},
     
    ])
  ],
  providers: [WorldService,WorldHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
