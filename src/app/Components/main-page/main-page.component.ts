import { Component, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/weather.model';
import { WeatherService } from 'src/app/weather.service';
import { WatchlistService } from '../watchlist/watchlist.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  constructor(private weatherService: WeatherService, private watchlistService: WatchlistService) { }
  
  // activatedRoute.params.subscribe((params)=>{
  //   if(params['id'])
  //   this.city = WeatherService.
  // })
  city: WeatherData = {} as WeatherData;
  isInCart: boolean = false;

  cityName: string = 'Bengaluru';
  weatherData?: WeatherData; 

  ngOnInit(): void {
    this.getWeatherDataForecast(this.cityName);
    this.cityName = '';
  }

  onSubmit() {
    console.log("onSubmit reached")
    this.getWeatherDataForecast(this.cityName);
    this.cityName = '';
  }
  private getWeatherDataForecast(cityName: string) {
    console.log("getweather reached")

    this.weatherService.getWeatherDataForecast(cityName)
    .subscribe({
      next: (response) => {
        this.weatherData = response;
        console.log(response);
      }
    });
  }


  addToCart() {
    console.log("Component -> addToCart");
       
    this.watchlistService.add(this.city);
    this.isInCart = true;
  }

  removeFromCart() {
    this.isInCart = false;
    this.watchlistService.remove(this.city);

}
}