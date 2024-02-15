import { Injectable } from '@angular/core';
import { Role } from '../models/Role';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
const baseUrl = 'http://localhost:8089/api';
@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient) { }

  getAllRoles(): Observable<Role[]> {
    return this.http.get<Role[]>(baseUrl+'/roles');
  }
  AddRoles(role :Role): Observable<Role> {
    return this.http.post<Role>(baseUrl+'/Addrole',role);
  }

}
