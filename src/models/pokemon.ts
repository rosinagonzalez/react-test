export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: Type[];
  sprites: Sprites;
}

export interface Sprites {
  other: OtherSprites;
}

export interface OtherSprites {
  officialArtwork: SpriteData;
}

export interface SpriteData {
  frontDefault: string;
}

export interface Type {
  slot: number;
  type: TypeData;
}

export interface TypeData {
  name: string;
}
