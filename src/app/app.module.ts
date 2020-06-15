import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseHomeComponent } from './course-home/course-home.component';
import { TrainingHomeComponent } from './training-home/training-home.component';
import { HeaderComponent } from './header/header.component';
import { CourseService } from './course.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider} from "angularx-social-login";
import { Login1Component } from './login1/login1.component';
import { HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("1035169042249-taca4m0o66a59fl0i38jt5sge7f5tdjm.apps.googleusercontent.com")
  }
]);
 
export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    CourseHomeComponent,
    TrainingHomeComponent,
    HeaderComponent,
    Login1Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule,
    HttpClientTestingModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
