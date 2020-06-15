import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import {Course} from './mycourse';


@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public _url: string = "http://localhost:8080/courses";
  public _url1: string = "/courses/add/";
  private _url2: string = "/courses/delete/";
  public _url3: string = "/courses/update";

  
  constructor(private _http: HttpClient) { }

  getCourses(): Observable<Course[]>{
    
      return this._http.get <Course[]> (this._url).pipe (
        tap(data => {
          console.log("in subscriber",data);
         
         
         
          })
        );;
  }


  SaveCourse(course: Course): Observable<Course>{
    alert("New course is added successfully");
      return this._http.post<Course>(this._url1, course, {
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      })
    }

    DeleteCourse(courseid: number): Observable<void>{
      alert("The course is deleted successfully");
        return this._http.delete<void>(this._url2+courseid);
      }

      
  UpdateCourse(course: Course): Observable<Course>{
    alert("The course is updated successfully");
    return this._http.put<Course>(this._url3, course, {
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      })
    })
  }
  }


