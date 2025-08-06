import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICartItem } from './models/interfaces';
import { environment } from '../../../environments/environment';
import { Product } from '../product/models/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = environment.apiUrl + '/cart';

  private cartItemSubject = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemSubject.asObservable();
  
  
  constructor(private http : HttpClient){

  }

  getAllProductInCart():Observable<ICartItem[]>{
    return this.http.get<ICartItem[]>(this.apiUrl);
  }

  loadCartCount(){
    this.http.get<ICartItem[]>(this.apiUrl).subscribe(cart=>{
      this.cartItemSubject.next(cart.length)
    })
  }

  addToCart(data:Product){
    this.http.post(this.apiUrl,data).subscribe(()=>{
      this.loadCartCount;
    })
  }


}
