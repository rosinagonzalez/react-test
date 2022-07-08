export interface PokemonResult {
  count: number;
  next: string;
  previous: string;
  results: PokemonResource[];
}

export interface PokemonResource {
  name: string;
  url: string;
}
