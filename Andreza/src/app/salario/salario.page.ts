import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-salario',
  templateUrl: './salario.page.html',
  styleUrls: ['./salario.page.scss'],
})
export class SalarioPage implements OnInit {
  salarioB: number;
  resultado: number;


  public minimo() {
    this.resultado = this.salarioB / 998;
  }

  constructor() { }

  ngOnInit() {
  }

}
