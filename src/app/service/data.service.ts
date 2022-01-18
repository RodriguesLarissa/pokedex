import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private readonly API = 'https://pokeapi.co/api/v2/pokemon';

  constructor(
    private http: HttpClient
  ) { }

  getPokemons(limit: number, offset: number){
    return this.http.get(`${this.API}?limit=${limit}&offset=${offset}`)
  }

  getPokemonDetails(name: string){
    return this.http.get(`${this.API}/${name}`);
  }

  getPokemonSpeciesDetails(id: number){
    return this.http.get(`${this.API}-species/${id}/`);
  }

}
