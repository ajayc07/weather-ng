import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-favourite-cities',
  templateUrl: './favourite-cities.component.html',
  styleUrls: ['./favourite-cities.component.scss']
})
export class FavouriteCitiesComponent {

  @Output() cityUpdated = new EventEmitter();

  public favouriteCities = [
    'London',
    'Birmingham,',
    'Cardiff'
  ]

  public emitCitySelection(city: string): void {
    this.cityUpdated.emit(city);
  }

}
