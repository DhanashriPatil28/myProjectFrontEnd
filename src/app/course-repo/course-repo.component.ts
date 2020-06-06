import { Component, OnInit } from '@angular/core';
import {Course} from '../mycourse';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-course-repo',
  templateUrl: './course-repo.component.html',
  styleUrls: ['./course-repo.component.scss']
})
export class CourseRepoComponent implements OnInit {

  courses: Course []= [];

  constructor(private _courseService: CourseService) { }

  ngOnInit(){

    this._courseService.getCourses()
        .subscribe (data => {console.log(data)
        this.courses = data;
        });

    
    
  }

}
