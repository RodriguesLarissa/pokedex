import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PokemonDetailComponent } from "./pokemon-detail.component";
import { PokemonNotFoundComponent } from "../pokemon-not-found/pokemon-not-found.component";

const routes: Routes = [
  { path: "", component: PokemonDetailComponent },
  {
    path: "pokemon-not-found",
    component: PokemonNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonDetailRoutingModule {}
