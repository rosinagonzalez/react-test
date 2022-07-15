export interface PokemonResult {
  map(arg0: (pokemon: any) => JSX.Element): import("react").ReactNode;
  count: number;
  next: string;
  previous: string;
  results: PokemonResource[];
}

export interface PokemonResource {
  name: string;
  url: string;
}
