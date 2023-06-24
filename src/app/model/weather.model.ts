export interface ForeCastData {
    temperature: number;
    weatherDescription: any;
    weatherCondition: any;
    pressure: any;
    humidity: any;
    forecastDate: any;
    wind: any;
    icon: any;
    day: number;
}

export interface ForeCast {
    currentWeatherData: Array<ForeCastData>,
    nearestForecast: ForeCastData
}