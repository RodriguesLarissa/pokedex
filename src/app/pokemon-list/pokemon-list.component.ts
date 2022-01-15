import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon';

import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  
  page: number = 1;
  totalPokemons: number;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){

    this.dataService.getPokemons(10, this.page + 0)
      .subscribe({next: (response: any) => {
        this.totalPokemons = response.count;

        response.results.forEach((pokemon: any) => {
          this.dataService.getPokemonDetails(pokemon.name)
            .subscribe((pokemonResponse: any) => {
              this.pokemons.push({
                name: pokemonResponse.name, 
                urlImage: pokemonResponse.sprites.other["official-artwork"].front_default
              });
            })
        })

      }}) 
      
  }

}
