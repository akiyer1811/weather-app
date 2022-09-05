import { Component, OnInit } from '@angular/core';
import { WatchlistService } from './watchlist.service';
import { WeatherData } from 'src/app/weather.model';


@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrls: ['./watchlist.component.css']
})
export class WatchlistComponent implements OnInit {
  constructor(private watchListService: WatchlistService) { }
  weatherData?: WeatherData; 
  ngOnInit(): void {
  }

  getCart() {
    return this.watchListService.get();
  }
}

