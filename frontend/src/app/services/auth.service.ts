import { Injectable, Type } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/user';
import { Observable } from 'rxjs';
import { application } from 'express';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url="http://localhost:3000/auth/signup";

  httpOptions: {headers: HttpHeaders} = {
    headers: new HttpHeaders({"Content-Type":"application/json"}),
  };

  constructor(private http: HttpClient) { }

  signup(user: Omit<User, "id">): Observable<User> {
      return this.http.post<User>(this.url, user);
  }
}
