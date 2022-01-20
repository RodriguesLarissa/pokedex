import { Component, OnDestroy, OnInit } from "@angular/core";
import { Pokemon } from "../model/pokemon";

import { DataService } from "../service/data.service";
import { Subscription } from "rxjs";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"],
})
export class PokemonListComponent implements OnInit, OnDestroy {
  pokemons: Pokemon[] = [];
  types: string[] = [];
  color: string;
  page: number = 1;
  totalPokemons: number;
  searchBox = "";

  pokemon: Subscription;
  pokemonType: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  ngOnDestroy() {
    this.pokemon.unsubscribe();
    this.pokemonType.unsubscribe();
  }

  getPokemons() {
    this.pokemon = this.dataService
      .getPokemons(
        12,
        this.page - 1 == 0
          ? this.page - 1
          : this.page - 1 + 12 * (this.page - 1)
      )
      .subscribe({
        next: (response: any) => {
          this.totalPokemons = response.count;
          response.results.forEach((pokemon: any) => {
            this.getPokemonType(pokemon);
          });
        },
      });
  }

  getPokemonType(pokemon: any) {
    this.pokemonType = this.dataService
      .getPokemonDetails(pokemon.name)
      .subscribe((pokemonResponse: any) => {
        this.types = [];
        pokemonResponse.types.forEach((el: any) => {
          this.types.push(el.type.name);
        });
        this.pokemons.push({
          id: pokemonResponse.id,
          name: pokemonResponse.name,
          urlImage:
            pokemonResponse.sprites.other["official-artwork"].front_default,
          types: this.types,
        });
        this.pokemons.sort((a, b) => (a.id < b.id ? -1 : 1));
        console.log(this.pokemons);
      });
  }
}
