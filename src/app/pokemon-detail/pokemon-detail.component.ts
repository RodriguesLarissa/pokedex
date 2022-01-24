import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
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
        life: 0,
        attack: 0, 
        defense: 0,
        speed: 0,
      },
      abilities: []
    };

  pokemonColor: Subscription;
  pokemonSub: Subscription;
  pokemonId: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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
            life: response.stats[0].base_stat,
            attack: response.stats[1].base_stat, 
            defense: response.stats[2].base_stat,
            speed: response.stats[5].base_stat,
          },
          abilities: this.abilities
        };
        
        console.log(this.pokemon)
      });
  }

  getPokemonColor() {
    this.pokemonColor = this.dataService
      .getPokemonSpeciesDetails(this.id)
      .subscribe((response: any) => {
        this.color = response.color.name;
      });
  }
}
