import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-descontos',
  templateUrl: './descontos.page.html',
  styleUrls: ['./descontos.page.scss'],
})
export class DescontosPage implements OnInit {
  inss: number;
  unimed: number;
  resultado: number;
  transporte: number;
  comida: number;
  saidinha: number;
  sindicato: number;
  club: number;
  salarioB: number;


  public descontar() {
    this.resultado = this.salarioB - (this.inss + this.unimed + this.transporte + this.comida + this.saidinha + this.sindicato + this.club);
  }

  constructor() { }

  ngOnInit() {
  }

}
