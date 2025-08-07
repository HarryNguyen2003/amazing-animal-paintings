import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { ICartItem } from './models/interfaces';
import { environment } from '../../../environments/environment';
import { ProductService } from '../product/product-service';
import { Product } from '../product/models/product';
@Injectable({
  providedIn: 'root'
})
export class CartService {
  private apiUrl = environment.apiUrl + '/cart';

  private cartItemSubject = new BehaviorSubject<number>(0);
  cartItemCount$ = this.cartItemSubject.asObservable();


  constructor(private http: HttpClient, private productService: ProductService) {
    this.loadCartCount();
  }

  getAllProductInCart(): Observable<ICartItem[]> {
    return this.http.get<ICartItem[]>(this.apiUrl);
  }

  loadCartCount() {
    this.http.get<ICartItem[]>(this.apiUrl).subscribe(cart => {
      this.cartItemSubject.next(cart.length)
    })
  }

  addToCartAndLoad(id: number) {
    this.productService.getProductById(id).subscribe((product) => {
      const CartItem: Omit<ICartItem, 'id'> = {
        "id_Item" : product.id,
        "quantity" : 1,
        "name": product.name,
        "price": product.price,
        "img_url": product.img_url
      }

      this.addToCart(CartItem).subscribe(() => {
        this.loadCartCount()
      })
    });

  }

  addToCart(data: Omit<ICartItem, 'id'>): Observable<void> {
    return this.http.post<void>(this.apiUrl, data)
  }


}
