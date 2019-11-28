import { Component } from '@angular/core';

import { Http } from '@angular/http';
import { CotacaoService } from '../cotacao.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public dolar: number;
  public infoBruta: any;

  constructor( public http: Http, public cotacao: CotacaoService) {}

  public vai() {
    this.cotacao.pegaCotacao().subscribe(
      
    );
  }

}
