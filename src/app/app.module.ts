import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherComponent } from './component/weather/weather.component';
import { WeatherDetailComponent } from './component/weather-detail/weather-detail.component';
import { WeeklyDetailComponent } from './component/weekly-detail/weekly-detail.component';
import { FavouriteCitiesComponent } from './component/favourite-cities/favourite-cities.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherDetailComponent,
    WeeklyDetailComponent,
    FavouriteCitiesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
