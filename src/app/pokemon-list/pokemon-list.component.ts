import { Component, OnInit } from '@angular/core';

import { DataService } from '../service/data.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons: any[] = [];

  constructor(
    private dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getPokemons()
      .subscribe((response: any) => {
        response.results.forEach((result: any) => {
          this.dataService.getPokemonDetails(result.name)
            .subscribe(pokemonResponse => {
              this.pokemons.push(pokemonResponse);
              console.log(this.pokemons);
            });
        });
      });
  }

}
