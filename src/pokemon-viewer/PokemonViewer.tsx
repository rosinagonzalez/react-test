import React from "react";
import { Pokemon } from "../models/pokemon";
import "./PokemonViewer.scss";

interface Props {
  currentPokemon: Pokemon | undefined;
}

function PokemonViewer({ currentPokemon }: Props) {
  // display pokemon info, with the Pokemon type from src/models/pokemon.ts
  return (
    <div className="PokemonViewer">
      {currentPokemon ? (
        <div key={currentPokemon.id}>
          <img
            src={currentPokemon.sprites.other.officialArtwork.frontDefault}
            alt={currentPokemon.name}
            className="pokemon-img"
          />
          <p>
            <b>{currentPokemon.id}.</b> {currentPokemon.name}
          </p>
          <div>
            <div key={currentPokemon.id}>
              <p>Type {currentPokemon.types[0].type.name}</p>
              <p>
                HT <b>{currentPokemon.height / 10}</b>M
              </p>
              <p>
                WT <b>{currentPokemon.weight / 10}</b>KG
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p>No pokémon selected</p>
      )}
    </div>
  );
}

export default PokemonViewer;
