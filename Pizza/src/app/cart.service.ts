import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private data = [
    {
      category: 'Pizza Salgada',
      expanded: true,
      products: [
        {id: 0, name: 'Calabresa', price: '13'},
        {id: 1, name: 'Camarão', price: '29.99'},
        {id: 2, name: 'Frango Catupiry', price: '15'},
        {id: 3, name: 'Mussarela', price: '10'},
        {id: 4, name: 'Marguerita', price: '16.88'},
        {id: 5, name: 'Pepperoni', price: '19'},
        {id: 6, name: 'Portuguesa', price: '14'},
        {id: 7, name: 'Presunto & Queijo', price: '8'}
      ]
    },
    {
      category: 'Pizza Doce',
      products: [
        {id: 8, name: 'Abacaxi', price: '11'},
        {id: 10, name: 'Beijinho', price: '9'},
        {id: 11, name: 'Brigadeiro', price: '10'},
      ]
    },
    {
      category: 'Bebidas',
      products:[
        {id: 12, name: 'Vinho', price: '10'},
        {id: 13, name: 'Refrigerante', price: '7'},
        {id: 14, name: 'Suco', price: '6'}
      ]
    }
  ];

  private cart = [];

  constructor() { }

  getProducts(){
    return this.data;
  }

  getCart(){
    return this.cart;
  }

  addProduct(product){
    this.cart.push(product);
  }

}
