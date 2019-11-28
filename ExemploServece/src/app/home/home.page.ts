import { Component } from '@angular/core';

import { MoovieService } from "../../providers/moovie/moovie";////////////////////////////

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],

  providers: [///////////////////////
    MoovieService///////////////////
  ]

})
export class HomePage {

  public agora: Date = new Date();

  public dia : number = this.agora.getDay();

  public ano : number = this.agora.getFullYear();

  public mes : number = this.agora.getMonth();

  public semana (): string {switch (this.dia) {case 0: return 'Domingo'; case 1: return 'Segunda'; case 2: return 'Terca';
  case 3: return 'Quarta'; case 4: return 'Quinta'; case 5: return 'Sexta'; case 6: return 'Sabado'}};

  public Mes (): string {switch (this.dia) {case 0: return 'janeiro'; case 1: return 'fevereiro'; case 2: return 'março';
  case 3: return 'abril'; case 4: return 'maio'; case 5: return 'junho'; case 6: return 'julho'; case 7: return 'agosto';
  case 8: return 'setembro'; case 9: return 'outubro'; case 10: return 'novembro'; case 11: return 'dezembro'}};

  constructor(){
    setInterval(()=>{
    this.agora = new Date();
    },+1);
  }
  

}
