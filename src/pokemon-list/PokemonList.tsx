import React from 'react';
import './PokemonList.scss';

function PokemonList() {
  return (
    <div className="PokemonList">
      <div className="list-container">
        <div className="input-container">
          <input placeholder="Start typing to filter" />
        </div>
        {pokemonList?.results.length ? (
          <div className="list">
            <button className="list-item">DISPLAY POKEMON NAME</button>
          </div>
        ) : (
          <p className="empty-state">
            There arent any Pokémon matching
            <b>DISPLAY SEARCH TERM</b>
          </p>
        )}
      </div>
    </div>
  );
}

export default PokemonList;
