import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData } from './data';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = "http://104.196.69.231:3000/turbines_info";
  //private url = "https://facebook.github.io/react-native/movies.json";
  //private url = "https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json";
  private subject = new Subject<any>();
  private data: Array<any>;
  constructor(private http: HttpClient) { }

  
  getData(){
    //const a = this.http.get<IData>(this.url);
    return this.http.get<IData>(this.url);
  }

  
}
