import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor() { }

  public extractWeatherData(weatherData: Array<any>) {

    const currentTime: any = new Date();
    const currentWeatherData: Array<any> = [];
    let minTimeDifference = Infinity;
    let nearestForecast = null;

    weatherData.map((forecast) => {

      const forecastDate: any =  new Date(forecast.dt * 1000);
      const timeDifference = Math.abs(forecastDate - currentTime);
      
      const parsedData = {
        temperature: Math.ceil(forecast.main.temp),
        weatherDescription: forecast.weather[0].description,
        weatherCondition: forecast.weather[0].main,
        pressure: forecast.main.pressure,
        humidity: forecast.main.humidity,
        forecastDate,
        wind: forecast.wind.speed,
        icon: forecast.weather[0].icon,
        day: Math.ceil((forecastDate - currentTime) / (1000 * 60 * 60 * 24))
      }

      currentWeatherData.push(parsedData)

      if (timeDifference < minTimeDifference) {
        minTimeDifference = timeDifference;
        nearestForecast = parsedData;
      }

    });

    return {nearestForecast, currentWeatherData};
  }
}
