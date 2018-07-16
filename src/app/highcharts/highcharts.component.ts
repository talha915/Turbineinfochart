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

    // Static Data
    /* const response = this.service_data.getmyData();
     response.forEach((element)=>{
       console.log("Element>D", element);
       this.element_id = element.id;
      this.element_price = element.price;

       console.log("Id is: ", this.element_id);
       console.log("Price is: ", this.element_price);

       var mydata = {
         x: this.element_id,
         y: this.element_price
       }
      
       this.Datas.push(mydata);
       console.log("MY DATAS>>>", this.Datas);
     })
     let o=Object.assign({},this.options);
     o.series[]=this.Datas;
     this.options=o;*/
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

       })

       let o=Object.assign({},this.options);
       o.series[0].data=this.Datas1
      this.options=o;
     }) 
  }

}
