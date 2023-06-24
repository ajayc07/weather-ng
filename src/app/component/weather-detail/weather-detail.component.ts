import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-weather-detail',
  templateUrl: './weather-detail.component.html',
  styleUrls: ['./weather-detail.component.scss']
})
export class WeatherDetailComponent {

  @Input() currentForeCast: any;
  @Input() city: any;

  public weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

}
