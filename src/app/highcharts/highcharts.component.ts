import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';
import { IData } from '../Service/data';
import { Subscription } from 'rxjs';
import { UserService } from '../user.service';
@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements OnInit {
  public Datas1 = [];
  subscription: Subscription;
  message: any;
  myData: any = [];
  element_power;
  element_wind;
  public options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Turbine Graph'
    },
    xAxis:{
      title: {
        text: 'Wind'
      }
    },
    yAxis: {
      title: {
        text: 'Power'
      }
    },
    series: [{
      name: 'Turbine Information',
      data: [],
      "turboThreshold": 15000,
    }]
  }
  
  constructor(private service_data: DataService, private user: UserService) { 
  }

  sortByOrder(a,b){    
    a = a.x;    
    b = b.x; 
    return (a < b) ? -1 : (a > b) ? 1 : 0;  
  }
  
  ngOnInit() {
    
    //Data from url
    this.service_data.getmyData();
    this.service_data.getData()
    .subscribe((response: any)=>{
     console.log("Response", response);
       response.forEach((element)=>{

         var mydata = {
           x: element.power,
           y: element.wind
         }
         this.Datas1.push(mydata);
         console.log("Datas: ", this.Datas1);
       })
       this.Datas1.sort(this.sortByOrder);
       let o=Object.assign({},this.options);
       o.series[0].data=this.Datas1
       this.options=o;
     }) 
  }

}
