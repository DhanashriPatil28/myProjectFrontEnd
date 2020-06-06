import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Course} from './mycourse';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private _url: string = "/courses";

  constructor(private _http: HttpClient) { }

  getCourses(): Observable<Course[]>{
      return this._http.get <Course[]> (this._url);
  }
  SaveCourse(course: Course): Observable<Course>{
    if(course.id===null){
      console.log(course.id)
      return this._http.post<Course>(this._url, course, {
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      })
    }
  }

  
}
