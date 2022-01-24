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
    hp: number;
    atk: number;
    def: number;
    'special atk': number;
    'special def': number;
    spd: number;
  },
  abilities: string[]
}
