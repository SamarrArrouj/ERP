import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';
import { LoginRequest } from '../models/LoginRequest';

const AUTH_API = 'http://localhost:8089/api/auth/';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(loginRequest:LoginRequest): Observable<any> {
    return this.http.post(
      AUTH_API + 'signin',loginRequest,
      httpOptions
    );
  }

  register(user:User): Observable<User> {
    return this.http.post<User>(AUTH_API + 'signup',user,httpOptions);
  }

  logout() {
    window.sessionStorage.clear();
  }
}

