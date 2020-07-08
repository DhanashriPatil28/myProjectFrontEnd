import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';
import { INT_TYPE } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.scss']
})
export class AddCourseComponent implements OnInit {
  errorMsg1: String;
  flag: boolean = true;
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

  validateCourse(course: String){
    var l = this.courses.length;
    for (let i = 0; i < l; i++) {
    if(course == this.courses[i]){
      alert("The course is already exist, please choose the option 'update' to update the entered course or you can continue adding with any other new course");
    }
    }
  }

  getCourses(course: String) {
    console.log("called");
    console.log(course);
    this._categoryservice.getCoursesFromCategory(course)
    .subscribe (
      data => console.log(this.courses =  data),
      
      );
      
  }
  saveCourse(){
    this.isCollapsed6 = !this.isCollapsed6;
    if(this.course.courseName && this.course.categoryName){
      this._categoryservice.SaveCourse(this.course).subscribe(
        data => this.course =  data,
        data => this.errorMsg1 =  data
      );
    }
    else{
      alert("The Category Name and Course Name of new course is mandatory")
    }
}

}
