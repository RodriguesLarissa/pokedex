import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Subscription } from "rxjs";

import { PokemonDetail } from "../model/pokemon";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"],
})
export class PokemonDetailComponent implements OnInit, OnDestroy {
  id: number;
  color: string = "";
  types: string[] = [];
  abilities: string[] = [];
  moves: string[] = [];
  description: string = "";

  pokemon: PokemonDetail = {
    id: 0,
    name: "",
    urlImage: "",
    types: [],
    color: "",
    body: {
      weight: 0,
      height: 0
    },
    stats: {
      hp: 0,
      atk: 0, 
      def: 0,
      'sp atk': 0,
      'sp def': 0,
      spd: 0,
    },
    abilities: [],
    moves: [],
    description: ""
  };

  pokemonColor: Subscription;
  pokemonSub: Subscription;
  pokemonId: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService
  ) {}

  async ngOnInit() {
    this.getPokemon();
  }

  ngOnDestroy(): void {
    this.pokemonId.unsubscribe();
    this.pokemonSub.unsubscribe();
    this.pokemonColor.unsubscribe();
  }

  getId() {
    this.pokemonId = this.route.params.subscribe((params: any) => {
      this.id = params["id"];
    });
  }

  getPokemonColor() {
    this.pokemonColor = this.dataService
      .getPokemonSpeciesDetails(this.id)
      .subscribe((response: any) => {
        this.color = response.color.name;
        this.description = response.flavor_text_entries[9].flavor_text
      });
  }

  getPokemon() {
    this.getId();
    this.getPokemonColor();
    this.pokemonSub = this.dataService
      .getPokemon(this.id)
      .subscribe((response: any) => {
        response.types.forEach((el: any) => {
          this.types.push(el.type.name);
        });
        response.abilities.forEach((el: any) => {
          this.abilities.push(el.ability.name);
        });
        response.moves.forEach((el: any) => {
          this.moves.push(el.move.name);
        });
        this.pokemon = {
          id: this.id,
          name: response.forms[0].name,
          urlImage: response.sprites.other["official-artwork"].front_default,
          types: this.types,
          color: this.color,
          body: {
            weight: response.weight,
            height: response.height
          },
          stats: {
            hp: response.stats[0].base_stat,
            atk: response.stats[1].base_stat, 
            def: response.stats[2].base_stat,
            'sp atk': response.stats[3].base_stat,
            'sp def': response.stats[4].base_stat,
            spd: response.stats[5].base_stat,
          },
          abilities: this.abilities,
          moves: this.moves,
          description: this.description
        };
        console.log(this.pokemon)
      });
  }

}
