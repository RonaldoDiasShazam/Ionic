import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
/*
import { ModalController } from '@ionic/angular';
import { ModalPage } from 'src/app/modal/modal.page';
*/
@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {
 
  constructor(private router: Router) { }

  /*
  MODAL------------------------
   lottieConfig: any;
  constructor(public modalController: ModalController) { }
  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalPage
    });
    return await modal.present();
  }
  */
  ngOnInit() {
  }
  openCursos(){
    this.router.navigateByUrl('/game')
  }
}
