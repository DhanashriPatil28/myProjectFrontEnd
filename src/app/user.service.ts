import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders,HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {User} from './User';

@Injectable({
  providedIn: 'root'
})

export class UserService {

  //public _url: string = "/categories/users";
  public _url1: string = "/categories/users/add";

  constructor(private _http: HttpClient) { }

  SaveUser(user: User): Observable<User>{
      return this._http.post<User>(this._url1, user, {
        headers:new HttpHeaders({
          'Content-Type':'application/json'
        })
      })
      .catch(this._errorHandler);
    }

    _errorHandler(err: HttpErrorResponse){
      console.log(err);
      return Observable.throw(err || "Server Error");
    }

}
