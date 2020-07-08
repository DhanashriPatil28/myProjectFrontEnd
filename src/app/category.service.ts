import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse  } from '@angular/common/http';
//import { Response} from '@angular/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {Category} from './category';

import 'rxjs/add/operator/catch';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  //Get all categories
  public _url: string = "/categories";

  //Get all available courses from all categories
  public _url1: string = "/categories/courses";

  //Get all courses from particular category
  public _url2: string = "/categories/";

  //Get a particular course details
  public _url3: string = "/categories/courseDetails/";

  //Add new course
  public _url4: string = "/categories/add";

  //Delete course
  public _url5: string = "/categories/delete/";

  //Update course
  public _url6: string = "/categories/update/";

  constructor(private _http: HttpClient) { }


getCat(): Observable<String []>{
    
  return this._http.get <String []> (this._url)
  .pipe (
    tap(data => {
      console.log(data);
      })
    )
    .catch(this._errorHandler);

}

getCourses(): Observable<String []>{
    
  return this._http.get <String []> (this._url1)
  .pipe (
    tap(data => {
      console.log(data);
      })
    )
    .catch(this._errorHandler);
}

getCoursesFromCategory(_category: String):Observable<String []>{
    
  return this._http.get <String []> (this._url2+_category)
  .pipe (
    tap(data => {
      console.log(data);
      })
    )
    .catch(this._errorHandler);

}

GetCourseDetails(_category: String):Observable<Category[]>{
    
  return this._http.get <Category[]> (this._url3+_category)
  .pipe (
    tap(data => {
      console.log(data);
      })
    )
    .catch(this._errorHandler);

}
SaveCourse(course: Category): Observable<Category>{
  
    return this._http.post<Category>(this._url4, course, {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
    .pipe (
      tap(data => {
        alert("New Course is saved successfully")
        })
      )
    .catch(this._errorHandler);
  }

  UpdateCourse(course: Category): Observable<Category>{
    return this._http.put<Category>(this._url6 + course.courseName, course, {
      headers:new HttpHeaders({
      
      })
    })
    .pipe (
      tap(data => {
        alert("The Course is updated successfully")
        })
      )
    .catch(this._errorHandler);
  }

  DeleteCourse(course_name: String): Observable<void>{
    
      return this._http.delete<void>(this._url5+course_name)
      .pipe (
        tap(data => {
          alert("Selected Course is deleted successfully")
          })
        )
      .catch(this._errorHandler);
    }

    
_errorHandler(err: HttpErrorResponse){
  console.log(err);
  return Observable.throw(err || "Server Error");
}
}


