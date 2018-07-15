import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IData } from './data';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  //private url = "http://104.196.69.231:3000/turbines_info";
  //private url = "https://facebook.github.io/react-native/movies.json";
  //private url = "https://cdn.rawgit.com/highcharts/highcharts/057b672172ccc6c08fe7dbb27fc17ebca3f5b770/samples/data/usdeur.json";
  private url = "https://facebook.github.io/react-native/movies.json";
  constructor(private http: HttpClient) { }

  
  getData(){
    //const a = this.http.get<IData>(this.url);
    console.log("Some how");
    return this.http.get<IData>(this.url);
  }

  getmyData(){
    return [
      {
        "id": 1,
        "type": "Condo",
        "price": 220000,
        "address": "213 Grove Street",
        "description": "Excellent place, really nice view!",
        "bedrooms": 2,
        "bathrooms": 1.5,
        "area": 921,
        "image": "crib-1"
      },
      {
        "id": 2,
        "type": "House",
        "price": 410500,
        "address": "7823 Winding Way",
        "description": "Beautiful home with lots of space for a large family.",
        "bedrooms": 4,
        "bathrooms": 3,
        "area": 2145,
        "image": "crib-2"
      },
      {
        "id": 3,
        "type": "Duplex",
        "price": 395000,
        "address": "834 River Lane",
        "description": "Great neighbourhood and lot's of nice green space.",
        "bedrooms": 3,
        "bathrooms": 2.5,
        "area": 1500,
        "image": "crib-3"
      },
      {
        "id": 4,
        "type": "House",
        "price": 755990,
        "address": "7807 Forest Avenue",
        "description": "Best house on the block!",
        "bedrooms": 6,
        "bathrooms": 4.5,
        "area": 3230,
        "image": "crib-4"
      },
      {
        "id": 5,
        "type": "Condo",
        "price": 210500,
        "address": "1857 Andover Court",
        "description": "Nice little condo with room to grow.",
        "bedrooms": 2,
        "bathrooms": 1.5,
        "area": 1023,
        "image": "crib-5"
      },
      {
        "id": 6,
        "type": "House",
        "price": 334900,
        "address": "7398 East Avenue",
        "description": "You'll love the view!",
        "bedrooms": 4,
        "bathrooms": 2.5,
        "area": 1788,
        "image": "crib-6"
      }
    ]
  }
  
}
