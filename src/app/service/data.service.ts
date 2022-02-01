import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.prod";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private readonly API = environment.API;

  constructor(private http: HttpClient) {}

  getPokemons(limit: number, offset: number) {
    return this.http.get(`${this.API}?limit=${limit}&offset=${offset}`);
  }

  getPokemonDetails(name: string) {
    return this.http.get(`${this.API}/${name}`);
  }

  getPokemonColor(id: number) {
    return this.http
      .get<any>(`${this.API}-species/${id}/`)
      .pipe(map((response) => response.color.name));
  }

  getPokemon(id: number) {
    return this.http.get(`${this.API}/${id}`);
  }
}
