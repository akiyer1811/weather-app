import { Injectable } from '@angular/core';
import { WeatherData } from 'src/app/weather.model';

@Injectable({
  providedIn: 'root'
})
export class WatchlistService {
  watchlist: Array<WeatherData> = []

  constructor() { }

  add(city: WeatherData) {
    this.watchlist.push(city);
  }

  get() {
    return this.watchlist;
  }

  remove(city: WeatherData) {
    this.watchlist = this.watchlist.filter((b) => b != city);
  }
}