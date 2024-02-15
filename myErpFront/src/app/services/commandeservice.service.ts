import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Commande } from '../models/Commande';
const baseUrl ="http://localhost:8089/commande/"
@Injectable({
  providedIn: 'root'
})
export class CommandeserviceService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Commande[]> {
    return this.http.get<Commande[]>(baseUrl+"getAll");
  }

  get(id: number): Observable<Commande> {
    return this.http.get<Commande>(`${baseUrl}get/${id}`);
  }

  create(commande: Commande): Observable<Commande> {
    return this.http.post<Commande>(baseUrl+'post', commande);
  }
  delete(num: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}delete/${num}`);
  }
}
