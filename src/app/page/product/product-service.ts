import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './models/product';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = environment.apiUrl + "/product"

  constructor(private http: HttpClient) { }

  getProduct(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }

  postProduct(data: Omit<Product,'id'>): Observable<Product> {
    return this.http.post<Product>(this.apiUrl,data)
  }

  deleteProduct(id:number): Observable<void>{
    return this.http.delete<void>(`${this.apiUrl}/${id}`)
  }
}