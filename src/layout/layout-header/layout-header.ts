import { CartService } from './../../app/page/cart/cart-service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToolbarModule } from 'primeng/toolbar';
import { ButtonModule } from 'primeng/button';
import { AvatarModule } from 'primeng/avatar';
import { AvatarGroupModule } from 'primeng/avatargroup';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-layout-header',
  imports: [ CommonModule,ToolbarModule, ButtonModule, AvatarModule, AvatarGroupModule],
  templateUrl: './layout-header.html',
  styleUrl: './layout-header.css'
})
export class LayoutHeader implements OnInit {
  cartItemCount$! : Observable<number>;

  constructor(private router: Router,private cartService:CartService) {}

  ngOnInit(): void {
    this.cartItemCount$ = this.cartService.cartItemCount$;
  }

  goTo(route:String){
    this.router.navigate([route])
  }

}
