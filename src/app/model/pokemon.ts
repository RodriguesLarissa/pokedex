export interface Pokemon {
  id: any;
  name: string;
  urlImage: string;
  types: string[];
}

export interface PokemonDetail extends Pokemon {
  color: string;
  body: {
    weight: number;
    height: number;
  };
  stats: {
    hp: number;
    atk: number;
    def: number;
    "sp atk": number;
    "sp def": number;
    spd: number;
  };
  abilities: string[];
}
