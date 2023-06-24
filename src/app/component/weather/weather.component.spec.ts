import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherComponent } from './weather.component';

import { CommunicationService } from 'src/app/services/communication.service';
import { WeatherService } from 'src/app/services/weather.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { of } from 'rxjs';
import { WeatherDetailComponent } from '../weather-detail/weather-detail.component';
import { WeeklyDetailComponent } from '../weekly-detail/weekly-detail.component';
import { FavouriteCitiesComponent } from '../favourite-cities/favourite-cities.component';

describe('WeatherComponent', () => {
  let component: WeatherComponent;
  let fixture: ComponentFixture<WeatherComponent>;
  let mockData: any[];


  let communicationService: CommunicationService;
  let weatherService: WeatherService;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      declarations: [WeatherComponent, WeatherDetailComponent, WeeklyDetailComponent, FavouriteCitiesComponent],
      imports: [HttpClientTestingModule]
    });
    fixture = TestBed.createComponent(WeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    communicationService = TestBed.inject(CommunicationService);
    weatherService = TestBed.inject(WeatherService);
    mockData = [
      {
        "dt": 1687597200,
        "main": {
          "temp": 292.62,
          "feels_like": 292.63,
          "temp_min": 292.62,
          "temp_max": 296.25,
          "pressure": 1023,
          "sea_level": 1023,
          "grnd_level": 1021,
          "humidity": 77,
          "temp_kf": -3.63
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 2.59,
          "deg": 253,
          "gust": 3.64
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-24 09:00:00"
      },
      {
        "dt": 1687608000,
        "main": {
          "temp": 296.63,
          "feels_like": 296.63,
          "temp_min": 296.63,
          "temp_max": 299.54,
          "pressure": 1023,
          "sea_level": 1023,
          "grnd_level": 1020,
          "humidity": 61,
          "temp_kf": -2.91
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 18
        },
        "wind": {
          "speed": 3.31,
          "deg": 265,
          "gust": 3.66
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-24 12:00:00"
      },
      {
        "dt": 1687618800,
        "main": {
          "temp": 300.8,
          "feels_like": 300.92,
          "temp_min": 300.8,
          "temp_max": 300.8,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1018,
          "humidity": 46,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 28
        },
        "wind": {
          "speed": 3.42,
          "deg": 272,
          "gust": 2.9
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-24 15:00:00"
      },
      {
        "dt": 1687629600,
        "main": {
          "temp": 299.34,
          "feels_like": 299.34,
          "temp_min": 299.34,
          "temp_max": 299.34,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1017,
          "humidity": 52,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 39
        },
        "wind": {
          "speed": 1.25,
          "deg": 273,
          "gust": 1.36
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-24 18:00:00"
      },
      {
        "dt": 1687640400,
        "main": {
          "temp": 295.71,
          "feels_like": 295.77,
          "temp_min": 295.71,
          "temp_max": 295.71,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1017,
          "humidity": 67,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 57
        },
        "wind": {
          "speed": 1.05,
          "deg": 155,
          "gust": 1.68
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-06-24 21:00:00"
      },
      {
        "dt": 1687651200,
        "main": {
          "temp": 293.11,
          "feels_like": 292.96,
          "temp_min": 293.11,
          "temp_max": 293.11,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1016,
          "humidity": 69,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 29
        },
        "wind": {
          "speed": 1.86,
          "deg": 160,
          "gust": 4.77
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-06-25 00:00:00"
      },
      {
        "dt": 1687662000,
        "main": {
          "temp": 291.17,
          "feels_like": 290.41,
          "temp_min": 291.17,
          "temp_max": 291.17,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1014,
          "humidity": 53,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 26
        },
        "wind": {
          "speed": 2.02,
          "deg": 159,
          "gust": 7.27
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-06-25 03:00:00"
      },
      {
        "dt": 1687672800,
        "main": {
          "temp": 293.46,
          "feels_like": 292.93,
          "temp_min": 293.46,
          "temp_max": 293.46,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1013,
          "humidity": 53,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 13
        },
        "wind": {
          "speed": 3.3,
          "deg": 160,
          "gust": 9.63
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-25 06:00:00"
      },
      {
        "dt": 1687683600,
        "main": {
          "temp": 299.01,
          "feels_like": 298.96,
          "temp_min": 299.01,
          "temp_max": 299.01,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1012,
          "humidity": 50,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 5.29,
          "deg": 188,
          "gust": 8.03
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-25 09:00:00"
      },
      {
        "dt": 1687694400,
        "main": {
          "temp": 301.68,
          "feels_like": 301.38,
          "temp_min": 301.68,
          "temp_max": 301.68,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1010,
          "humidity": 41,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 801,
            "main": "Clouds",
            "description": "few clouds",
            "icon": "02d"
          }
        ],
        "clouds": {
          "all": 18
        },
        "wind": {
          "speed": 5.61,
          "deg": 197,
          "gust": 8.48
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-25 12:00:00"
      },
      {
        "dt": 1687705200,
        "main": {
          "temp": 301.53,
          "feels_like": 301.16,
          "temp_min": 301.53,
          "temp_max": 301.53,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1009,
          "humidity": 40,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 6.35,
          "deg": 211,
          "gust": 9.62
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-25 15:00:00"
      },
      {
        "dt": 1687716000,
        "main": {
          "temp": 298.45,
          "feels_like": 298.34,
          "temp_min": 298.45,
          "temp_max": 298.45,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1009,
          "humidity": 50,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 5.9,
          "deg": 250,
          "gust": 8.25
        },
        "visibility": 10000,
        "pop": 0.02,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-25 18:00:00"
      },
      {
        "dt": 1687726800,
        "main": {
          "temp": 292.25,
          "feels_like": 291.86,
          "temp_min": 292.25,
          "temp_max": 292.25,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1012,
          "humidity": 63,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 6
        },
        "wind": {
          "speed": 4.87,
          "deg": 273,
          "gust": 9.56
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-06-25 21:00:00"
      },
      {
        "dt": 1687737600,
        "main": {
          "temp": 289.31,
          "feels_like": 288.81,
          "temp_min": 289.31,
          "temp_max": 289.31,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1014,
          "humidity": 70,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 4
        },
        "wind": {
          "speed": 4.07,
          "deg": 274,
          "gust": 9.67
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-06-26 00:00:00"
      },
      {
        "dt": 1687748400,
        "main": {
          "temp": 287.44,
          "feels_like": 287.01,
          "temp_min": 287.44,
          "temp_max": 287.44,
          "pressure": 1017,
          "sea_level": 1017,
          "grnd_level": 1014,
          "humidity": 80,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01n"
          }
        ],
        "clouds": {
          "all": 0
        },
        "wind": {
          "speed": 3.63,
          "deg": 267,
          "gust": 9.08
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-06-26 03:00:00"
      },
      {
        "dt": 1687759200,
        "main": {
          "temp": 288.52,
          "feels_like": 287.94,
          "temp_min": 288.52,
          "temp_max": 288.52,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 1015,
          "humidity": 70,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 800,
            "main": "Clear",
            "description": "clear sky",
            "icon": "01d"
          }
        ],
        "clouds": {
          "all": 1
        },
        "wind": {
          "speed": 3.67,
          "deg": 269,
          "gust": 6.79
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-26 06:00:00"
      },
      {
        "dt": 1687770000,
        "main": {
          "temp": 292.08,
          "feels_like": 291.33,
          "temp_min": 292.08,
          "temp_max": 292.08,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1016,
          "humidity": 50,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 93
        },
        "wind": {
          "speed": 3.88,
          "deg": 273,
          "gust": 5.25
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-26 09:00:00"
      },
      {
        "dt": 1687780800,
        "main": {
          "temp": 293.81,
          "feels_like": 293.03,
          "temp_min": 293.81,
          "temp_max": 293.81,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1016,
          "humidity": 42,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 96
        },
        "wind": {
          "speed": 4.54,
          "deg": 261,
          "gust": 6.09
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-26 12:00:00"
      },
      {
        "dt": 1687791600,
        "main": {
          "temp": 293.21,
          "feels_like": 292.5,
          "temp_min": 293.21,
          "temp_max": 293.21,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1016,
          "humidity": 47,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 5.01,
          "deg": 288,
          "gust": 6.84
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-26 15:00:00"
      },
      {
        "dt": 1687802400,
        "main": {
          "temp": 292.89,
          "feels_like": 292.15,
          "temp_min": 292.89,
          "temp_max": 292.89,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1017,
          "humidity": 47,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 5.01,
          "deg": 286,
          "gust": 7.56
        },
        "visibility": 10000,
        "pop": 0.06,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-26 18:00:00"
      },
      {
        "dt": 1687813200,
        "main": {
          "temp": 290.55,
          "feels_like": 289.94,
          "temp_min": 290.55,
          "temp_max": 290.55,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1017,
          "humidity": 61,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 2.93,
          "deg": 266,
          "gust": 6.76
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-06-26 21:00:00"
      },
      {
        "dt": 1687824000,
        "main": {
          "temp": 289.62,
          "feels_like": 289.1,
          "temp_min": 289.62,
          "temp_max": 289.62,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1018,
          "humidity": 68,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.28,
          "deg": 267,
          "gust": 8.48
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-06-27 00:00:00"
      },
      {
        "dt": 1687834800,
        "main": {
          "temp": 287.74,
          "feels_like": 287.37,
          "temp_min": 287.74,
          "temp_max": 287.74,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1017,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 72
        },
        "wind": {
          "speed": 2.84,
          "deg": 248,
          "gust": 8.25
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-06-27 03:00:00"
      },
      {
        "dt": 1687845600,
        "main": {
          "temp": 288.63,
          "feels_like": 288.32,
          "temp_min": 288.63,
          "temp_max": 288.63,
          "pressure": 1021,
          "sea_level": 1021,
          "grnd_level": 1018,
          "humidity": 80,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 83
        },
        "wind": {
          "speed": 2.67,
          "deg": 261,
          "gust": 4.99
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-27 06:00:00"
      },
      {
        "dt": 1687856400,
        "main": {
          "temp": 292.7,
          "feels_like": 292.38,
          "temp_min": 292.7,
          "temp_max": 292.7,
          "pressure": 1020,
          "sea_level": 1020,
          "grnd_level": 1017,
          "humidity": 64,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 98
        },
        "wind": {
          "speed": 3.56,
          "deg": 258,
          "gust": 5.38
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-27 09:00:00"
      },
      {
        "dt": 1687867200,
        "main": {
          "temp": 295.95,
          "feels_like": 295.59,
          "temp_min": 295.95,
          "temp_max": 295.95,
          "pressure": 1019,
          "sea_level": 1019,
          "grnd_level": 1016,
          "humidity": 50,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 93
        },
        "wind": {
          "speed": 4.17,
          "deg": 244,
          "gust": 5.45
        },
        "visibility": 10000,
        "pop": 0.2,
        "rain": {
          "3h": 0.19
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-27 12:00:00"
      },
      {
        "dt": 1687878000,
        "main": {
          "temp": 296,
          "feels_like": 295.67,
          "temp_min": 296,
          "temp_max": 296,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 1015,
          "humidity": 51,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 98
        },
        "wind": {
          "speed": 5.07,
          "deg": 242,
          "gust": 6.04
        },
        "visibility": 10000,
        "pop": 0.32,
        "rain": {
          "3h": 0.1
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-27 15:00:00"
      },
      {
        "dt": 1687888800,
        "main": {
          "temp": 294.49,
          "feels_like": 294.27,
          "temp_min": 294.49,
          "temp_max": 294.49,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 1015,
          "humidity": 61,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 99
        },
        "wind": {
          "speed": 4.44,
          "deg": 235,
          "gust": 6.43
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-27 18:00:00"
      },
      {
        "dt": 1687899600,
        "main": {
          "temp": 292.45,
          "feels_like": 292.32,
          "temp_min": 292.45,
          "temp_max": 292.45,
          "pressure": 1018,
          "sea_level": 1018,
          "grnd_level": 1015,
          "humidity": 72,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 97
        },
        "wind": {
          "speed": 4.06,
          "deg": 226,
          "gust": 7.8
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-06-27 21:00:00"
      },
      {
        "dt": 1687910400,
        "main": {
          "temp": 290.96,
          "feels_like": 290.91,
          "temp_min": 290.96,
          "temp_max": 290.96,
          "pressure": 1016,
          "sea_level": 1016,
          "grnd_level": 1013,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 82
        },
        "wind": {
          "speed": 3.66,
          "deg": 223,
          "gust": 9.36
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-06-28 00:00:00"
      },
      {
        "dt": 1687921200,
        "main": {
          "temp": 289.92,
          "feels_like": 289.92,
          "temp_min": 289.92,
          "temp_max": 289.92,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1012,
          "humidity": 87,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 38
        },
        "wind": {
          "speed": 3.69,
          "deg": 224,
          "gust": 10.68
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-06-28 03:00:00"
      },
      {
        "dt": 1687932000,
        "main": {
          "temp": 290.99,
          "feels_like": 290.94,
          "temp_min": 290.99,
          "temp_max": 290.99,
          "pressure": 1015,
          "sea_level": 1015,
          "grnd_level": 1011,
          "humidity": 81,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 803,
            "main": "Clouds",
            "description": "broken clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 69
        },
        "wind": {
          "speed": 3.94,
          "deg": 226,
          "gust": 9.19
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-28 06:00:00"
      },
      {
        "dt": 1687942800,
        "main": {
          "temp": 291.54,
          "feels_like": 291.6,
          "temp_min": 291.54,
          "temp_max": 291.54,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 1011,
          "humidity": 83,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.64,
          "deg": 227,
          "gust": 7.89
        },
        "visibility": 10000,
        "pop": 0.19,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-28 09:00:00"
      },
      {
        "dt": 1687953600,
        "main": {
          "temp": 291.3,
          "feels_like": 291.55,
          "temp_min": 291.3,
          "temp_max": 291.3,
          "pressure": 1014,
          "sea_level": 1014,
          "grnd_level": 1011,
          "humidity": 91,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 100
        },
        "wind": {
          "speed": 3.23,
          "deg": 214,
          "gust": 8.11
        },
        "visibility": 10000,
        "pop": 0.27,
        "rain": {
          "3h": 0.34
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-28 12:00:00"
      },
      {
        "dt": 1687964400,
        "main": {
          "temp": 292.11,
          "feels_like": 292.39,
          "temp_min": 292.11,
          "temp_max": 292.11,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1009,
          "humidity": 89,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 99
        },
        "wind": {
          "speed": 3.09,
          "deg": 287,
          "gust": 5.83
        },
        "visibility": 10000,
        "pop": 0.72,
        "rain": {
          "3h": 1.65
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-28 15:00:00"
      },
      {
        "dt": 1687975200,
        "main": {
          "temp": 290.9,
          "feels_like": 291.03,
          "temp_min": 290.9,
          "temp_max": 290.9,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1009,
          "humidity": 88,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10d"
          }
        ],
        "clouds": {
          "all": 99
        },
        "wind": {
          "speed": 2.05,
          "deg": 263,
          "gust": 4.06
        },
        "visibility": 10000,
        "pop": 0.98,
        "rain": {
          "3h": 0.46
        },
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-28 18:00:00"
      },
      {
        "dt": 1687986000,
        "main": {
          "temp": 289.42,
          "feels_like": 289.5,
          "temp_min": 289.42,
          "temp_max": 289.42,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1009,
          "humidity": 92,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 500,
            "main": "Rain",
            "description": "light rain",
            "icon": "10n"
          }
        ],
        "clouds": {
          "all": 90
        },
        "wind": {
          "speed": 2.89,
          "deg": 260,
          "gust": 7.82
        },
        "visibility": 10000,
        "pop": 0.54,
        "rain": {
          "3h": 0.37
        },
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-06-28 21:00:00"
      },
      {
        "dt": 1687996800,
        "main": {
          "temp": 286.06,
          "feels_like": 285.63,
          "temp_min": 286.06,
          "temp_max": 286.06,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1009,
          "humidity": 85,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03n"
          }
        ],
        "clouds": {
          "all": 49
        },
        "wind": {
          "speed": 3.5,
          "deg": 270,
          "gust": 10.31
        },
        "visibility": 10000,
        "pop": 0.26,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-06-29 00:00:00"
      },
      {
        "dt": 1688007600,
        "main": {
          "temp": 285.82,
          "feels_like": 285.13,
          "temp_min": 285.82,
          "temp_max": 285.82,
          "pressure": 1012,
          "sea_level": 1012,
          "grnd_level": 1009,
          "humidity": 76,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 804,
            "main": "Clouds",
            "description": "overcast clouds",
            "icon": "04n"
          }
        ],
        "clouds": {
          "all": 94
        },
        "wind": {
          "speed": 3.26,
          "deg": 271,
          "gust": 8.93
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "n"
        },
        "dt_txt": "2023-06-29 03:00:00"
      },
      {
        "dt": 1688018400,
        "main": {
          "temp": 286.93,
          "feels_like": 286.37,
          "temp_min": 286.93,
          "temp_max": 286.93,
          "pressure": 1013,
          "sea_level": 1013,
          "grnd_level": 1010,
          "humidity": 77,
          "temp_kf": 0
        },
        "weather": [
          {
            "id": 802,
            "main": "Clouds",
            "description": "scattered clouds",
            "icon": "03d"
          }
        ],
        "clouds": {
          "all": 48
        },
        "wind": {
          "speed": 3.56,
          "deg": 262,
          "gust": 7.71
        },
        "visibility": 10000,
        "pop": 0,
        "sys": {
          "pod": "d"
        },
        "dt_txt": "2023-06-29 06:00:00"
      }
    ]
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getWeatherData on city selection', () => {

    spyOn(communicationService, 'getFiveDaysWeatherData').and.returnValue(of(mockData));
    spyOn(component, 'updateCitySelection').and.callFake;

    component.updateCitySelection('London')

    expect(component.updateCitySelection).toHaveBeenCalled();
  });

  
  it('should define forecast data', () => {

    spyOn(communicationService, 'getFiveDaysWeatherData').and.returnValue(of(mockData));
    spyOn(component, 'updateCitySelection').and.callFake;

    component.updateCitySelection('London');

    expect(communicationService.getFiveDaysWeatherData).toHaveBeenCalled();
  });
});

