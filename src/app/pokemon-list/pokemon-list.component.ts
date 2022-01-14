import { Component, OnInit } from '@angular/core';

import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];
  
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
            .subscribe(pokemonResponse => {
              this.pokemons.push(pokemonResponse);
              console.log(this.pokemons);
            })
        })
      }}) 
  
  }

}
