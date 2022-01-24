export interface Pokemon {
  id: number;
  name: string;
  urlImage: string;
  types: string[];
}

export interface PokemonDetail extends Pokemon {
  color: string;
  body: {
    weight: number;
    height: number;
  }
  stats: {
    life: number;
    attack: number;
    defense: number;
    speed: number;
  },
  abilities: string[]
}
