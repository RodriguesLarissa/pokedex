import { Component, OnInit } from "@angular/core";
import { Pokemon } from "../model/pokemon";

import { DataService } from "../service/data.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"],
})
export class PokemonListComponent implements OnInit {
  pokemons: Pokemon[] = [];
  color: string;
  page: number = 1;
  totalPokemons: number;
  searchBox = "";

  pokemons$: Observable<Pokemon[]>;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons() {
    this.dataService
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
            this.getPokemonDetails(pokemon);
          });
        },
      });
  }

  getPokemonColor(id: number, name: string, url: string, types: string[]) {
    this.dataService.getPokemonSpeciesDetails(id).subscribe((response: any) => {
      this.pokemons.push({
        id: id,
        name: name,
        urlImage: url,
        types: types,
        color: response.color.name,
      });
      this.pokemons.sort((a, b) => (a.id < b.id ? -1 : 1));
    });
  }

  getPokemonDetails(pokemon: any) {
    let types: string[] = [];
    this.dataService
      .getPokemonDetails(pokemon.name)
      .subscribe((pokemonResponse: any) => {
        pokemonResponse.types.forEach((el: any) => {
          types.push(el.type.name);
        });
        this.getPokemonColor(
          pokemonResponse.id,
          pokemonResponse.name,
          pokemonResponse.sprites.other["official-artwork"].front_default,
          types
        );
      });
  }
}
