import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Journaux } from '../models/Journaux';
const baseUrl ="http://localhost:8089/journaux/"
@Injectable({
  providedIn: 'root'
})
export class JournauxserviceService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Journaux[]> {
    return this.http.get<Journaux[]>(baseUrl+"getAll");
  }
  getBydate(date:Date): Observable<Journaux[]> {
    return this.http.get<Journaux[]>(baseUrl+"getBydate/"+date);
  }

  getbynum(num: number): Observable<Journaux> {
    return this.http.get<Journaux>(`${baseUrl}get/${num}`);
  }

  create(journaux: Journaux): Observable<Journaux> {
    return this.http.post<Journaux>(baseUrl+'post', journaux);
  }

  update( journaux: Journaux,num:number): Observable<Journaux> {
    return this.http.put<Journaux>(`${baseUrl}put?num=${num}`,journaux);
  }

  deleteBynum(num: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}delete/${num}`);
  }
  deleteAll(): Observable<void> {
    return this.http.delete<void>(`${baseUrl}deleteAll/`);
  }
}
