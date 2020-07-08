import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  providers: [CategoryService],
  selector: 'app-course-home',
  templateUrl: './course-home.component.html',
  styleUrls: ['./course-home.component.scss']
})

export class CourseHomeComponent implements OnInit{

  categories: String [];
  public isCollapsed: boolean = false;
  public isCollapsed7: boolean = false;
  public isCollapsed1: boolean = false;
  public isCollapsed2: boolean = false;
  courses: String [];
  course: Category [];
  course1 = new Category();
  errorMsg: String;
  errorMsg1: String;
  errorMsg2: String;
  errorMsg3: String;
  errorMsg4: String;

  constructor(private _categoryservice: CategoryService) { }

  ngOnInit(): void {

    this._categoryservice.getCat()
    .subscribe (
      data => this.categories =  data,
      data => this.errorMsg =  data
      );

    this._categoryservice.getCourses()
    .subscribe (data => 
      this.courses =  data,
      data => this.errorMsg1 =  data
  );
  } 
   
    getCourses(course: String) {
      this.isCollapsed7 = true;
      this.isCollapsed1 = !this.isCollapsed1;
      this._categoryservice.getCoursesFromCategory(course)
      .subscribe (
        data => this.courses =  data,
        data => this.errorMsg2 =  data
        );
    }

    getCourseDetails(courseName: String){

      this.isCollapsed2 = !this.isCollapsed2;
      this._categoryservice.GetCourseDetails(courseName)
      .subscribe (
        data => this.course =  data,
        data => this.errorMsg3 =  data
        );
    }

    
    deleteCourse(){
      if(this.course[0].courseName){
        this._categoryservice.DeleteCourse(this.course[0].courseName).subscribe(
          data => console.log(data),
          data => this.errorMsg4 =  data
      );
      }
      else{
        alert("Course name is mandatory");
      }
    }
  }

   
