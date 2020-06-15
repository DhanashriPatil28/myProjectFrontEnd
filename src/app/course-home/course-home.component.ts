import { Component, OnInit } from '@angular/core';
import {Course} from '../mycourse';
import { CourseService } from '../course.service';
import { Observable } from 'rxjs';

@Component({
  providers: [CourseService],

  selector: 'app-course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.scss']
})

export class CourseHomeComponent{

  courses: Course [];
  course = new Course();
  isCollapsed: boolean = true;
  isCollapsed1: boolean = true;
  isCollapsed2: boolean = true;
  isCollapsed3: boolean = true;
  
  constructor(private _courseService: CourseService) { }

  getAll() {
    console.log("in home");
      this.isCollapsed1 = !this.isCollapsed1;
      this._courseService.getCourses()
      .subscribe (data => {
        console.log("in subscriber");
       
        this.courses = data;
       
        });
    }

    saveCourse(){
      console.log("in home");
    
        this._courseService.SaveCourse(this.course).subscribe(course => {
          console.log("in subscriber");
         
          this.course=course;
        });
     
    }

    deleteCourse(){
      if(this.course.id){
        this._courseService.DeleteCourse(this.course.id).subscribe(
          );
      }
      else{
        alert("Course id is mandatory");
      }
    }

    updateCourse(){
      if(this.course.name && this.course.description){
        this._courseService.UpdateCourse(this.course).subscribe(course => {
          this.course=course;
          console.log("in home");
        }
          );
      }
      else{
        alert("The id of updating course with name and description is mandatory")
      }
    }

    toggle(){
      this.isCollapsed = !this.isCollapsed;
    }
    toggle2(){
      this.isCollapsed2 = !this.isCollapsed2;
    }
    toggle3(){
      this.isCollapsed3 = !this.isCollapsed3;
    }
  }

   
