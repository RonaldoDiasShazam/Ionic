import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  cart = [];
  items = [];

  sliderContig = {
    spaceBetween: 14,
    centeredSlides: true,
    slidesPerView: 1.6
    
  }

  constructor(private cartService: CartService, private route: Router){ }

  ngOnInit(){
    this.cart = this.cartService.getCart();
    this.items = this.cartService.getProducts();
  }


  addToCart(product){
    this.cartService.addProduct(product);
  }

  openCart(){
    this.route.navigate(['cart'])
  }
}
