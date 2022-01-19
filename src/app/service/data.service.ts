import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment.prod";

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

  getPokemonSpeciesDetails(id: number) {
    return this.http.get(`${this.API}-species/${id}/`);
  }
}
