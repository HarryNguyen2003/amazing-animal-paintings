import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product-service';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';

@Component({
  selector: 'app-product-list',
  imports: [CommonModule,ButtonModule,CardModule],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css'
})
export class ProductList implements OnInit {
  products: Product[] = []

  constructor(private proService : ProductService){

  }
  
  ngOnInit(): void {
    this.proService.getProduct().subscribe(data => {
      this.products =  data;
    })
  }
}
