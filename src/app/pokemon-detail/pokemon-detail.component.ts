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
  color: string = "gray";

  pokemonColor: Subscription;
  pokemonSub: Subscription;
  pokemonId: Subscription;
  pokemon: PokemonDetail;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {}

  ngOnInit(): void {
    this.getId();
    this.getPokemonColor();
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
    let types: string[] = [];
    this.pokemonSub = this.dataService
      .getPokemon(this.id)
      .subscribe((response: any) => {
        response.types.forEach((el: any) => {
          types.push(el.type.name);
        });
        this.pokemon = {
          id: this.id,
          name: response.forms[0].name,
          urlImage: response.sprites.other["official-artwork"].front_default,
          types: types,
          color: this.color,
        };
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
