import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../model/pokemon';

import { DataService } from '../service/data.service';
import { map } from 'rxjs/operators'


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  color: string;

  page: number = 1;
  totalPokemons: number;

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(){

    this.dataService.getPokemons(12, this.page + 0)
      .subscribe({next: (response: any) => {
        this.totalPokemons = response.count;

        response.results.forEach((pokemon: any) => {
          this.dataService.getPokemonDetails(pokemon.name)
            .subscribe((pokemonResponse: any) => {
              this.pokemons.push({
                id: pokemonResponse.id,
                name: pokemonResponse.name, 
                urlImage: pokemonResponse.sprites.other["official-artwork"].front_default,
                color: String(this.getPokemonColor(pokemonResponse.id))
              });
              console.log(String(this.getPokemonColor(pokemonResponse.id)));
              
            })
        })
        console.log(this.pokemons);

      }}) 
      
  }

  getPokemonColor(id: number){

    this.dataService.getPokemonSpeciesDetails(id)
      .subscribe((response: any) => {
        this.color = response.color.name;
        return this.color;   
      })

  }

}
