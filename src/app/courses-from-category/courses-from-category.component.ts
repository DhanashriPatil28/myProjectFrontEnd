import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-courses-from-category',
  templateUrl: './courses-from-category.component.html',
  styleUrls: ['./courses-from-category.component.scss']
})
export class CoursesFromCategoryComponent implements OnInit {

  courses: String [];
  public isCollapsed: boolean = false;

  constructor(private _categoryservice: CategoryService) { }

  ngOnInit(): void {
   
    }

}
