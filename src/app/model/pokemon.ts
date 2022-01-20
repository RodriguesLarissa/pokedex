export interface Pokemon {
  id: number;
  name: string;
  urlImage: string;
  types: string[];
}

export interface PokemonDetail extends Pokemon {
  color: string;
}
