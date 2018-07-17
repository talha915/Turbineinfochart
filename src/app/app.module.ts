import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChartModule } from 'angular2-highcharts'; 
import { AppComponent } from './app.component';
import { HighchartsComponent } from './highcharts/highcharts.component';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpClientModule } from '@angular/common/http';
import { LoginPageComponent } from './login-page/login-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';

declare var require: any
@NgModule({
  declarations: [
    AppComponent,
    HighchartsComponent,
    LoginPageComponent,
    SignupPageComponent
  ],
  imports: [
    BrowserModule,
    ChartModule.forRoot(require('highcharts')),
    HttpClientModule,
    FormsModule ,
    RouterModule.forRoot([
      {
        path: '',
        component: SignupPageComponent
      },
      {
        path: 'login',
        component: LoginPageComponent
      },
      {
        path: 'Highcharts',
        component: HighchartsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
platformBrowserDynamic().bootstrapModule(AppModule);
