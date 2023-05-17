import { Injectable } from '@angular/core';
import { User } from './model/users';

//Xử lí bất đồng bộ
import { Observable } from 'rxjs'; 
import { of } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userURL = "http://localhost:3000/users";

  getAllUsers() : Observable<User[]>{
    return this.http.get<User[]>(this.userURL).pipe(
      tap(receivedUser => console.log(`receivedUser = ${JSON.stringify(receivedUser)}`)),
      catchError(error => of([]))
    )
  }

  constructor(private http: HttpClient) { }


}
