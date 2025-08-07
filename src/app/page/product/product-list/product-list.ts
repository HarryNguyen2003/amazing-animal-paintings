import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product-service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CartService } from '../../cart/cart-service';
import { DataViewModule } from 'primeng/dataview';
import { TagModule } from 'primeng/tag';


@Component({
  selector: 'app-product-list',
  imports: [CommonModule,ButtonModule,CardModule,DataViewModule,TagModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  products: Product[] = []

  constructor(private proService : ProductService, private cartService:CartService){

  }
  
  ngOnInit(): void {
    this.proService.getProduct().subscribe(data => {
      this.products =  data;
    })
  }

  addToCart(id: number) {
    this.cartService.addToCartAndLoad(id);
  }
}
