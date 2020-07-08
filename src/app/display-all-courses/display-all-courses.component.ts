import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category';

@Component({
  selector: 'app-display-all-courses',
  templateUrl: './display-all-courses.component.html',
  styleUrls: ['./display-all-courses.component.scss']
})
export class DisplayAllCoursesComponent implements OnInit {

  courses: String [];
  public isCollapsed: boolean = false;

  constructor(private _categoryservice: CategoryService) { }

  ngOnInit(): void {
 
      this.isCollapsed = !this.isCollapsed;
      this._categoryservice.getCourses()
      .subscribe (data => {
        this.courses =  data;
        });
    
  }
}
