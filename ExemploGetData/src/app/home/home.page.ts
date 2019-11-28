import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  formattedDate;
  semana;

  
  public caminho: string;

  public datahora: Date = new Date();
  public hora: number = this.datahora.getHours();
  public minutos: number = this.datahora.getMinutes();
  public segundos: number = this.datahora.getSeconds();


  getFormattedDate() {
    var dateObj = new Date();
    var data = new Date();

    // pega dia mês ano
    var year = dateObj.getFullYear().toString()
    var month = dateObj.getMonth().toString()
    var date = dateObj.getDate().toString()

    // retorna os meses
    var monthArray = [
      'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
    this.formattedDate = date + '/' + monthArray[month] + '/' + year;

    // retornar a semana
    var dias = new Array(
      'domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado');
    this.semana = dias[data.getDay()];

  }
  // construtor, fazer os segundos rodar
  constructor(public navCtrl: NavController) {
    setInterval(() => {

      this.datahora = new Date();
      this.hora = this.datahora.getHours();
      this.minutos = this.datahora.getMinutes();
      this.segundos = this.datahora.getSeconds();
    }, 1);

    this.getFormattedDate()

  }

  // Botão com Imagens
  neve() {
    this.caminho = 'assets/imagens/nascersol.png'
  }

  sol() {
    this.caminho = 'assets/imagens/tarde.jpg'
  }

  nuvem() {
    this.caminho = 'assets/imagens/pordosol.jpg'
  }
}
