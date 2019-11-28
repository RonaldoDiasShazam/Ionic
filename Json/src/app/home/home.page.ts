import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public cafe: string;
  public cha: number;
  public leite: any;

  public objeto = {
    nome: 'Ronaldo',
    idade: '34',
    endereco: 'Rua 13 de Junho',

    // atributo que é uma lista
    celular: [
      '993964489',
      '997498638',
      '997456472'
    ]
  };

}
