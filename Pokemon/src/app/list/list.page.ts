import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {

  public listaPokemon = [

  // lista com as caracteristica dos pokémons
    {numero: 1, nome: 'Bulbasaur', tipo: ['Planta', 'Venenoso'], img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/001.png"},
    {numero: 4, nome: 'Charmander', tipo: ['Fogo'], img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/004.png"},
    {numero: 7, nome: 'Squirtle', tipo: ['Água'], img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/007.png"},
    {numero: 25, nome: 'Pikachu', tipo: ['Elétrico'], img: "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/025.png"},
  ];
  
// mostra só os pokémons pesquisados pelo usuário
  public listaFiltrada = [];

// metodo que inicializa o banco de dados
  constructor(){
    this.inicializador();
  }

// metodo que mostra a lista de pokémons para o usuário
  public inicializador(){
    this.listaFiltrada = this.listaPokemon;
  }

// if para busca de pokémons
  public buscaPokemon(evento){
    this.inicializador();
    let busca: string = evento.target.value;

    if(busca && busca.trim() !== ''){
      this.listaFiltrada = this.listaFiltrada.filter(item => {
        return item.nome.toLwerCase().includes(busca.toLowerCase());
      });
    }
  }

  ngOnInit() {
  }

}
