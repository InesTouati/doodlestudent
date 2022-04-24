import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

const url = "http://api.weatherstack.com/";
const key = "?access_key=623f2a230cf4192a3a88448ace53a95b";

@Injectable({
  providedIn: 'root'
})

export class WeatherServiceService {

  constructor(private http : HttpClient) { }

  /**
   * 
   * @param place : city
   * @returns current weather data
   */
  get_current_weather(place: string) : Observable<any>{
    return this.http.get(url+"current"+key+
                              "&query="+place
    );
  }

  /**
   * 
   * @param place : city
   * @param date : aaaa-dd-mm
   * @returns 
   */
   get_historical_weather(place: string, date: string) : Observable<any>{
    return this.http.get(url+"historical"+key+
                              "&query="+place+
                              "&historical_date="+date
    );
  }

  /**
   * 
   * @param place : city
   * @param date_start : aaaa-dd-mm
   * @param date_end : aaaa-dd-mm
   * @returns 
   */
  get_historical_interval_weather(place: string, date_start: string, date_end: string) : Observable<any>{
    return this.http.get(url+"historical"+key+
                              "&query ="+place+
                              "&historical_date_start="+date_start+
                              "&historical_date_end="+date_end
    );
  }

  /**
   * 
   * @param place : city
   * @param days : length of the forecast (<=14)
   * @returns current weather data
   */
   get_weather_forecast(place: string, days: number) : Observable<any>{
    return this.http.get(url+"forecast"+key+
                              "&query="+place+
                              "&forecast_days="+days
    );
  }
}
