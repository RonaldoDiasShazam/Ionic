import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {

      category: 'Bebidas geladas',

      expanded: true,

      products: [

        { id: 1, name: 'expresso pequeno', price: '4.50' },

        { id: 2, name: 'expresso grande', price: '6.50' },

        { id: 3, name: 'descafeinado pequeno', price: '5' },

        { id: 4, name: 'descafeinado grande', price: '7' },

        { id: 5, name: 'romano', price: '5.50' },

        { id: 6, name: 'espumone', price: '6.50' },

        { id: 7, name: 'sem lactose', price: '6.50' },

        { id: 8, name: 'latte', price: '7' },

        { id: 9, name: 'mocha', price: '9.50' },

        { id: 10, name: 'capuccino', price: '7' },

        { id: 11, name: 'capuccino c/ chocolate', price: '9.50' },


        { id: 12, name: 'café com avelã', price: '9.50' },


        { id: 13, name: 'café com panna', price: '6.50' },


        { id: 14, name: 'café com lemon', price: '12' },


        { id: 15, name: 'café mentolado', price: '12' },


        { id: 16, name: 'chocolate quente', price: '9' },


        { id: 17, name: 'chá mate', price: '7' },

      ]
    },
    {

      category: 'Bebidas quentes',

      products: [


        { id: 18, name: 'chá gelado', price: '9' },


        { id: 19, name: 'chocolate gelado', price: '9' },


        { id: 20, name: 'frapuccino pequeno', price: '12.50' },


        { id: 21, name: 'frapuccino grande', price: '15' },


      ]
    }
  ]
  
private cart = [];


  constructor() { }


  getProduct(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  addProduct(product){
    return this.cart.push(product);
  }

}
