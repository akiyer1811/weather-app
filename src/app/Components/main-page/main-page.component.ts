import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/weather.model';
import { WeatherService } from 'src/app/weather.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }

  cityName: string = 'Paris';
  weatherData?: WeatherData; 

  ngOnInit(): void {
    this.getWeatherDataForecast(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    this.getWeatherDataForecast(this.cityName);
    this.cityName = '';
  }
  private getWeatherDataForecast(cityName: string) {
    this.weatherService.getWeatherDataForecast(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }

}