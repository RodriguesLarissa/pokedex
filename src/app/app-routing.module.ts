import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    pathMatch: "full",
    redirectTo: "pokemon-list",
  },
  {
    path: "pokemon-list",
    loadChildren: () =>
      import("./pokemon-list/pokemon-list.module").then(
        (m) => m.PokemonListModule
      ),
  },
  {
    path: "pokemon-detail/:id",
    loadChildren: () =>
      import("./pokemon-detail/pokemon-detail.module").then(
        (m) => m.PokemonDetailModule
      ),
  },
  {
    path: "pokemon-not-found",
    loadChildren: () =>
      import("./pokemon-not-found/pokemon-not-found.module").then(
        (m) => m.PokemonNotFoundModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
