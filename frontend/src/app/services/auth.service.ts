import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/User';
import { Observable } from 'rxjs';
import { catchError, first } from 'rxjs/operators';
import { application } from 'express';
import { ErrorHandlerService } from './error-handler.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url="http://localhost:3000/auth";

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type":"application/json"}),
  };

  constructor(private http: HttpClient, private errorHandlerService: ErrorHandlerService) { }

  signup(user: Omit<User, "id">): Observable<User> {
      return this.http.post<User>(`${this.url}/signup`, user, this.httpOptions)
      .pipe(
        first(),
        catchError(this.errorHandlerService.handleError<User>("signup")
     )
      )
  }
}
