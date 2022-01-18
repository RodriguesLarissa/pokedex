import { Component, OnInit } from "@angular/core";
import { Colors } from "../model/colors";
import { Pokemon } from "../model/pokemon";

import { DataService } from "../service/data.service";

@Component({
  selector: "app-pokemon-list",
  templateUrl: "./pokemon-list.component.html",
  styleUrls: ["./pokemon-list.component.scss"],
})
export class PokemonListComponent implements OnInit {

  pokemons: Pokemon[] = [];
  colors = {
    fire: "#FF6E4B",
    grass: "#61FF6C",
    electric: "#FFE356",
    water: "#53C8FF",
    ground: "#FFA851",
    rock: "#A9A9A9",
    fairy: "#EA6AFF",
    poison: "#A641FF",
    bug: "#2F7D43",
    dragon: "#748DBB",
    psychic: "#C2C749",
    flying: "#F5F5F5",
    fighting: "#FFAA00",
    normal: "#00063C"
  };
  color: string;
  page: number = 1;
  totalPokemons: number;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.getPokemons();
    console.log(this.colors);
  }

  setBackgroundColor(type: any){
    let typePokemon = type as keyof typeof this.colors;
    return this.colors[typePokemon]
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
