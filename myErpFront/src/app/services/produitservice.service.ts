import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produit } from '../models/Produit';
const baseUrl ="http://localhost:8089/produit/"
@Injectable({
  providedIn: 'root'
})
export class ProduitserviceService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Produit[]> {
    return this.http.get<Produit[]>(baseUrl+"getAll");
  }

  get(num: number): Observable<Produit> {
    return this.http.get<Produit>(`${baseUrl}get/${num}`);
  }

  create(produit: Produit): Observable<Produit> {
    return this.http.post<Produit>(baseUrl+'post', produit);
  }

  update(id:number, produit: Produit): Observable<Produit> {
    return this.http.put<Produit>(`${baseUrl}put/${id}`, produit);
  }

  delete(num: number): Observable<void> {
    return this.http.delete<void>(`${baseUrl}delete/${num}`);
  }
}
