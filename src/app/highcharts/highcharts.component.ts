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
  options: object;
  public Data = [];
  public res;
  public Datas = [] ;
  subscription: Subscription;
  message: any;
  myData: any = [];
  turbine_info;
  constructor(private service_data: DataService) { 
    this.options = {
      chart: {
        type: 'line'
      },
      title: {
        text: 'simple chart'
      },
      subtitle: {
        text: 'Graph'
      },
    
      yAxis: {
        title: {
          text: 'Number of Employees'
        }
      },
      plotOptions: {
        series: {
          pointStart: 2010
        }
      },
      series:[]
        // type: 'area',
        // name: 'Turbine Data',
        // data: data
  }
  }

  
    
  
  ngOnInit() {
    let self =this;
    
    this.service_data.getData()
      .subscribe(function (res) {
        //self.drawChart(res.turbine_info)
        this.Data = res.turbine_info;
        console.log("Response", res.turbine_info[0].latitude, res.turbine_info[0].longitude);
        console.log("DATAS", this.Data);
        this.Data.forEach(function(element){
          console.log("elements", element);
          element.x = element.latitude,
          console.log("elements lat", element.x);
          element.y = element.longitude
          console.log("elements long", element.y);
         var mydata={
           x: element.x,
           y: element.y
         }
         console.log("MyData", mydata);
         self.Datas.push(mydata)
         console.log("Self.Datas", self.Datas)
        })
        console.log("Self Datas", self.Datas);
        self.options.series = [{
          name: 'TUR',
          data: self.Datas
        }];
        // this.options.series[{
        //   name: 'Graph',
        //   data: data
        // });
        // this.Data = res.movies;
        // console.log("Thi.Data", this.Data)
        
        // this.Data.forEach(function(element){
        //   var newData = {
        //     id: element.id,
        //     releaseYear: element.releaseYear
        //   };
        //   self.drawChart([newData])
        // })
        // if(res.id !==null && res.releaseYear!==null){
        //   console.log("res", res.movies[0]);
        // }
      })
      
     
  }

}
