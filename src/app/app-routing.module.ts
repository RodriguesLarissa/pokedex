import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PokemonListaComponent } from './pokemon-lista/pokemon-lista.component';

const routes: Routes = [
  {
    path: '', component: PokemonListaComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
