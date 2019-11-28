import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dolar',
  templateUrl: './dolar.page.html',
  styleUrls: ['./dolar.page.scss'],
})
export class DolarPage implements OnInit {
  salarioB: number;
  resultado: number;


  public dolar() {
    
    this.resultado = this.salarioB / 3.79;
  }

  constructor() { }

  ngOnInit() {
  }

}
