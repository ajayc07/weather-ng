import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {

  API_KEY = 'fe3695759da76e0c9dcaf566634a08ed';
  API_ENDPOINTS = 'https://api.openweathermap.org/data/2.5/forecast';

  constructor(
    private _httpClient: HttpClient
  ) { }

  public getFiveDaysWeatherData(location: string): Observable<any> {
    const url = `${this.API_ENDPOINTS}?q=${location}&appid=${this.API_KEY}&units=metric`;
    return this._httpClient.get<any>(url);
  }
}
