import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page {
  
slideOpts = {
      autoplay: {
        delay: 3000,
      },
    };

  constructor(public naCtrvl: NavController) {
    var CountDownDate = new Date("Nov 16, 2019 15:00:00").getTime();

    // Atualiza a contagem a cada 1 segundo
    var x = setInterval(function () {


      // Obter data e hora de hoje
      var now = new Date().getTime();


      // Encontre a distância entre agora e a data da contagem regressiva
      var distance = CountDownDate - now;


      // Cálculos de tempo para dias, horas, minutos e segundos
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      // var seconds = Math.floor((distance % (1000 * 60)) / 1000);


      // Exibe o resultado no elemento com id = "demo"
      document.getElementById("demo").innerHTML ="Faltam " + days + "d " + hours + "h " + minutes + "m para o fim das INSCRINÇÕES" ;


      // Se a contagem regressiva terminar, escreva algum texto
      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "As INSCRINÇÕES Terminaram...Aguarde o próximo semestre";
      }
    }, 1000);

  }
}
