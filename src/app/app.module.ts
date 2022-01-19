import { MatCardModule } from "@angular/material/card";
import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { PokemonListComponent } from "./pokemon-list/pokemon-list.component";
import { NgxPaginationModule } from "ngx-pagination";
import { MatToolbarModule } from "@angular/material/toolbar";
import { FilterPipe } from "./pipes/filter.pipe";

@NgModule({
  declarations: [AppComponent, PokemonListComponent, FilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    HttpClientModule,
    NgxPaginationModule,
    MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
