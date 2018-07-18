import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { HighchartsComponent } from '../highcharts/highcharts.component';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private router: Router, private user: UserService) { }
  public email;
  public password;
  public setemail = "talhazafar@hotmail.co.uk";
  public setpassword = "123";
  logged: boolean = false;
  public message="";
  ngOnInit() {
  }

  login(){
    if(this.email === this.setemail && this.password === this.setpassword) {
      this.logged = !this.logged;
      if(this.logged == true){
        this.user.setUserLoggedIn();
        this.router.navigateByUrl("/Highcharts");
        console.log("logged in", this.logged);
      }
      else{
        this.message = "Invalid Email or Password";
      }
      
    }
  }
}
