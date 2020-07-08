import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseHomeComponent } from './course-home/course-home.component';
import { TrainingHomeComponent } from './training-home/training-home.component';
import { HeaderComponent } from './header/header.component';
import { CategoryService } from './category.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider} from "angularx-social-login";
import { LoginComponent } from './login/login.component';

import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { DisplayAllCoursesComponent } from './display-all-courses/display-all-courses.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CoursesFromCategoryComponent } from './courses-from-category/courses-from-category.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { TrialComponent } from './trial/trial.component';



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
    LoginComponent,
    AboutUsComponent,
    ContactUsComponent,
    DisplayAllCoursesComponent,
    WelcomeComponent,
    CoursesFromCategoryComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    TrialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    SocialLoginModule
  ],
  providers: [
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    },
    CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
