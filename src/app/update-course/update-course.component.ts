import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.scss']
})
export class UpdateCourseComponent implements OnInit {

  errorMsg1: String;
  categories: String [];
  courses: String [];
  selectedCategory: String;

  course = new Category();
  public isCollapsed6: boolean = false;
  constructor(private _categoryservice: CategoryService) { }

  ngOnInit(): void {
    this._categoryservice.getCat()
    .subscribe (
      data => this.categories =  data,
     // data => this.errorMsg =  data
      );
 }

  getCourses(course: String) {
    
    console.log("called");
    console.log(course);
    this._categoryservice.getCoursesFromCategory(course)
    .subscribe (
      data => console.log(this.courses =  data),
      //data => this.errorMsg2 =  data
      );
  }
  
  updateCourse(){
    this.isCollapsed6 = !this.isCollapsed6;
    if(this.course.courseName && this.course.categoryName){
      this._categoryservice.UpdateCourse(this.course).subscribe(
        data => this.course =  data,
        data => this.errorMsg1 =  data
      
        );
    }
    else{
      alert("The Category Name and Course Name of updating course is mandatory")
    }
  }


}
