import { Component, OnInit } from '@angular/core';
import { ICartItem } from './models/interfaces';
import { CartService } from './cart-service';
import { DataViewModule } from 'primeng/dataview';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-cart',
  imports: [DataViewModule,CommonModule],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent implements OnInit {

  cartItemList!: ICartItem[];

  constructor(private cartService:CartService){
  }

  ngOnInit(): void {
    this.cartService.getAllProductInCart().subscribe((cartList)=>{
      this.cartItemList = cartList
    })
  }

  


}
