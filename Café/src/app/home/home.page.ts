import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {

  constructor(public alertController: AlertController) { }

  public valor = 0;

  /*public expresso1() {
    this.valor = this.valor + 4.50;
    alert('Adicionado ao seu pedido'  + this.valor);
  }*/

  async expresso1() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 expresso pequeno foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 4.50),
      buttons: ['OK']
    });

    await alert.present();

  }

  /*public expresso2() {
   this.valor = this.valor + 6.50;
   alert('Adicionado ao seu pedido'  + this.valor);
 }*/

  async expresso2() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 expresso grande foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 6.50),
      buttons: ['OK']
    });

    await alert.present();


    /*public descafeinado1() {
    this.valor = this.valor + 4.50;
    alert('Adicionado ao seu pedido'  + this.valor);*/
  }

  async descafeinado1() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 descafeinado pequeno foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 4.50),
      buttons: ['OK']
    });

    await alert.present();

    /*public descafeinado2() {
      this.valor = this.valor + 7.00;
      alert('Adicionado ao seu pedido'  + this.valor);*/
  }

  async descafeinado2() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 descafeinado grande foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 7),
      buttons: ['OK']
    });

    await alert.present();

    /*public romano() {
      this.valor = this.valor + 5.50;
      alert('Adicionado ao seu pedido'  + this.valor);*/
  }

  async romano() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 café romano grande foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 5.50),
      buttons: ['OK']
    });

    await alert.present();

    /*public espumone() {
      this.valor = this.valor + 6.50;
      alert('Adicionado ao seu pedido'  + this.valor);*/
  }

  async espumone() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 café espumone pequeno foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 6.50),
      buttons: ['OK']
    });

    await alert.present();

    /*public lactose() {
      this.valor = this.valor + 6.50;
      alert('Adicionado ao seu pedido'  + this.valor);*/
  }

  async lactose() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 café sem lactose pequeno foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 6.50),
      buttons: ['OK']
    });

    await alert.present();

    /*public latte() {
      this.valor = this.valor + 7.00;
      alert('Adicionado ao seu pedido'  + this.valor);*/
  }

  async latte() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 latte grande foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 7),
      buttons: ['OK']
    });

    await alert.present();

    /*public mocha() {
      this.valor = this.valor + 9.50;
      alert('Adicionado ao seu pedido'  + this.valor);*/
  }

  async mocha() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 mocha grande foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 9.50),
      buttons: ['OK']
    });

    await alert.present();

    /*public capuccino() {
      this.valor = this.valor + 7.00;
      alert('Adicionado ao seu pedido'  + this.valor);*/
  }

  async capuccino() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 capuccino pequeno foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 7),
      buttons: ['OK']
    });

    await alert.present();

    /*public capchoco() {
      this.valor = this.valor + 9.50;
      alert('Adicionado ao seu pedido'  + this.valor);*/
  }

  async capchoco() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 capuccino com chocolate grande foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 9.50),
      buttons: ['OK']
    });

    await alert.present();

    /*public avela() {
      this.valor = this.valor + 9.50;
      alert('Adicionado ao seu pedido'  + this.valor);*/
  }

  async avela() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 café com avelã pequeno foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 9.50),
      buttons: ['OK']
    });

    await alert.present();

    /*public panna() {
      this.valor = this.valor + 6.50;
      alert('Adicionado ao seu pedido'  + this.valor);*/
  }

  async panna() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 café com panna pequeno foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 6.50),
      buttons: ['OK']
    });

    await alert.present();

    /*public lemon() {
      this.valor = this.valor + 12.00;
      alert('Adicionado ao seu pedido'  + this.valor);*/
  }

  async lemon() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 café com lemon grande foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 12),
      buttons: ['OK']
    });

    await alert.present();


    /*public mentolado() {
      this.valor = this.valor + 12.00;
      alert('Adicionado ao seu pedido'  + this.valor);*/
  }

  async mentolado() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 café mentolado pequeno foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 12),
      buttons: ['OK']
    });

    await alert.present();

    /*public chocolate() {
      this.valor = this.valor + 9.00;
      alert('Adicionado ao seu pedido'  + this.valor);*/
  }

  async quente() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 chocolate quente pequeno foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 9),
      buttons: ['OK']
    });

    await alert.present();


    /*public mate() {
      this.valor = this.valor + 7.00;
      alert('Adicionado ao seu pedido'  + this.valor);*/
  }

  async mate() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 chá mate pequeno foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 7),
      buttons: ['OK']
    });

    await alert.present();

    /*public gelado() {
      this.valor = this.valor + 9.00;
      alert('Adicionado ao seu pedido'  + this.valor);*/
  }

  async gelado() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'x 1 chá gelado pequeno foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 9),
      buttons: ['OK']
    });

    await alert.present();
    /*public frap1() {
      this.valor = this.valor + 12.50;
      alert('Adicionado ao seu pedido'  + this.valor);*/
  }

  async frap1() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'x 1 frapuccino pequeno foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 12.50),
      buttons: ['OK']
    });

    await alert.present();

    /*public frap2() {
      this.valor = this.valor + 15.00;
      alert('Adicionado ao seu pedido' + this.valor);*/
  }

  async frap2() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: '1 frapuccino grande foi adicionado ao carrinho',
      message: 'O total do seu pedido é = R$ ' + (this.valor = this.valor + 15),
      buttons: ['OK']
    });

    await alert.present();

  }

}
