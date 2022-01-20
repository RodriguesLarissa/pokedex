import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PokemonNotFoundComponent } from "../pokemon-not-found/pokemon-not-found.component";

const routes: Routes = [
  { path: "", component: PokemonNotFoundComponent },
  {
    path: "pokemon-not-found",
    component: PokemonNotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PokemonNotFoundRoutingModule {}
