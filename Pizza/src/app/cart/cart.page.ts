import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.page.html',
  styleUrls: ['./cart.page.scss'],
})
export class CartPage implements OnInit {
selectdItems = [];
total = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    let items = this.cartService.getCart();
    let selected = {};
    for (let obj of items){
      if (selected[obj.id]){
        selected[obj.id].count++;
      } else{
        selected[obj.id] = {...obj, count: 1};
      }
    }

    this.selectdItems = Object.keys(selected).map(key => selected[key])
      console.log('items: ', this.selectdItems);
      this.total = this.selectdItems.reduce((a, b) => a + (b.count * b.price), 0);

  }

}
