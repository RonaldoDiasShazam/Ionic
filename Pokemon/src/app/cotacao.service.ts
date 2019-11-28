import { Injectable } from '@angular/core';

import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class CotacaoService {

  constructor( public http: Http) { }

  public pegaCotacao(): any {
    return this.http.get("https://olinda.bcb.gov.br/olinda/servico/PTAX/versao/v1/odata/CotacaoDolarDia(dataCotacao=@dataCotacao)?@dataCotacao='06-06-2019'&$top=100&$skip=0&$format=json&$select=cotacaoCompra,cotacaoVenda,dataHoraCotacao");
  }
}
