import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit{

  public foreCastData: any;

  public selectedCity: string = '';

  constructor(
    private _communicationService: CommunicationService,
    private _weatherService: WeatherService
  ){}

  ngOnInit(): void { 
  }

  public getWeatherData(city: string): void {
    this._communicationService.getFiveDaysWeatherData(city).subscribe((data) => {
      this.foreCastData = this._weatherService.extractWeatherData(data.list);
    })
  }

  public updateCitySelection(city: string): void {
    this.selectedCity = city;
    this.getWeatherData(city);
  }
}
