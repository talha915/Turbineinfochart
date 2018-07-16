import { Component, OnInit } from '@angular/core';
import { DataService } from '../Service/data.service';
import { IData } from '../Service/data';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-highcharts',
  templateUrl: './highcharts.component.html',
  styleUrls: ['./highcharts.component.css']
})
export class HighchartsComponent implements OnInit {
  public Data = [];
  public res;
  public Datas = [] ;
  public Datas1 = [] ;
  subscription: Subscription;
  message: any;
  myData: any = [];
  turbine_info;
  element_id;
  element_price;
  element_type;
  element_power;
  element_wind;
  options = {
    chart: {
      type: 'line'
    },
    title: {
      text: 'Turbine Graph'
    },
    subtitle: {
      text: 'Graph'
    },

    yAxis: {
      title: {
        text: 'Power'
      }
    },
    plotOptions: {
     
    },
    series: [{
      name: 'Graph Name',
      data: [],
      "turboThreshold": 5000,
    }]
  }
  constructor(private service_data: DataService) { 
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
         this.element_power = element.power;
         this.element_wind = element.wind;

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
