import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseRepoComponent } from './course-repo/course-repo.component';
import { CourseHomeComponent } from './course-home/course-home.component';
import { TrainingHomeComponent } from './training-home/training-home.component';
import { HeaderComponent } from './header/header.component';
import { AddCourseComponent } from './courseCRUD/add-course/add-course.component';
import { CourseService } from './course.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CourseRepoComponent,
    CourseHomeComponent,
    TrainingHomeComponent,
    HeaderComponent,
    AddCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
