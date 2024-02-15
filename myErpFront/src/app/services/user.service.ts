import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/User';

const API_URL = 'http://localhost:8080/api/test/';
const URL = 'http://localhost:8089/user/';

@Injectable({
  providedIn: 'root',
})
export class UserService{



  constructor(private http: HttpClient) { }
  getPublicContent(): Observable<any> {
    return this.http.get(API_URL + 'all', { responseType: 'text' });
  }
  createUser(user: User) {
    return this.http.post<User>(URL + 'create', user);
  }
  getusers() {
 return this.http.get<User[]>(URL+'read')
  }
  editUser(u:User) {
   return this.http.put<User>(URL+'update',u)
  }
  getUser(id: number) {
   return this.http.get<User>(URL+'getUser/'+id)
  }
  deleteUser(id: number) {
    return this.http.delete(URL+'delete/'+id)
  }

  getUserBoard(): Observable<any> {
    return this.http.get(API_URL + 'user', { responseType: 'text' });
  }

  getModeratorBoard(): Observable<any> {
    return this.http.get(API_URL + 'mod', { responseType: 'text' });
  }

  getAdminBoard(): Observable<any> {
    return this.http.get(API_URL + 'admin', { responseType: 'text' });
  }
}

