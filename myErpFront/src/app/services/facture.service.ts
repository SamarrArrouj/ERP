import { Facture } from '../models/Facture';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const baseUrl ="http://localhost:8089/facture/"
@Injectable({
  providedIn: 'root'
})
export class FactureService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Facture[]> {
    return this.http.get<Facture[]>(baseUrl+"getAll");
  }
  getReglements(): Observable<string[]> {
    return this.http.get<string[]>(baseUrl+"reglement");
  }

  get(num: number): Observable<Facture> {
    return this.http.get<Facture>(`${baseUrl}get/${num}`);
  }

  create(facture: Facture): Observable<Facture> {
    return this.http.post<Facture>(baseUrl+'post', facture);
  }

  update( facture: Facture): Observable<Facture> {
    return this.http.put<Facture>(`${baseUrl}put`, facture);
  }

  delete(num: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}delete/${num}`);
  }


}
