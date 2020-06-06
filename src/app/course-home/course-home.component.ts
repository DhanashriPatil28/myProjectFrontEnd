import { Component, OnInit } from '@angular/core';
import {Course} from '../mycourse';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.scss']
})

export class CourseHomeComponent implements OnInit {

  courses: Course []= [];
  course: Course;
  isCollapsed: boolean = true;
  isCollapsed1: boolean = true;
  isCollapsed2: boolean = true;
  isCollapsed3: boolean = true;
  
  constructor(private _courseService: CourseService) { }
 

  ngOnInit(): void {
  }

  getAll() {
      this.isCollapsed1 = !this.isCollapsed1;
      this._courseService.getCourses()
      .subscribe (data => {console.log(data)
      this.courses = data
      });
    }

    saveCourse(){
      this.isCollapsed = !this.isCollapsed;
      console.log("in save");
      this._courseService.SaveCourse(this.course).subscribe(course => {
        this.courses.unshift(this.course)
      });
        
    }

  deleteCourse(){
    this.isCollapsed2 = !this.isCollapsed2;
  }

  updateCourse(){
    this.isCollapsed3 = !this.isCollapsed3;
  }

  
}

   
