import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

import { PokemonDetail } from "../model/pokemon";
import { DataService } from "../service/data.service";

@Component({
  selector: "app-pokemon-detail",
  templateUrl: "./pokemon-detail.component.html",
  styleUrls: ["./pokemon-detail.component.scss"],
})
export class PokemonDetailComponent implements OnInit {
  id: number;
  types: string[] = [];
  abilities: string[] = [];
  color: string = "";

  pokemon: PokemonDetail = {
    id: 0,
    name: "",
    urlImage: "",
    types: [],
    color: "",
    body: {
      weight: 0,
      height: 0,
    },
    stats: {
      hp: 0,
      atk: 0,
      def: 0,
      "sp atk": 0,
      "sp def": 0,
      spd: 0,
    },
    abilities: [],
  };

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPokemon();
  }

  getId() {
    this.route.params.subscribe((params: any) => {
      this.id = params["id"];
    });
  }

  async getPokemon() {
    this.getId();
    const colorPokemon = await this.dataService
      .getPokemonColor(this.id)
      .toPromise();

    this.dataService.getPokemon(this.id).subscribe((response: any) => {
      response.types.map((type: any) => this.types.push(type.type.name));
      response.abilities.map((ability: any) =>
        this.abilities.push(ability.ability.name)
      );

      this.pokemon = {
        id: this.id,
        name: response.forms[0].name,
        urlImage: response.sprites.other["official-artwork"].front_default,
        types: this.types,
        color: colorPokemon,
        body: {
          weight: response.weight,
          height: response.height,
        },
        stats: {
          hp: response.stats[0].base_stat,
          atk: response.stats[1].base_stat,
          def: response.stats[2].base_stat,
          "sp atk": response.stats[3].base_stat,
          "sp def": response.stats[4].base_stat,
          spd: response.stats[5].base_stat,
        },
        abilities: this.abilities,
      };
    });
  }

  pokemonListPage() {
    this.router.navigate(["/pokemon-list"]);
  }
}
