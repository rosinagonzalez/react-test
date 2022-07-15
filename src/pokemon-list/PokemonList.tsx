import React, { useEffect, useState } from "react";
import useGetFirstGen from "../hooks/useGetFirstGen";
import usePokemon from "../hooks/usePokemon";
import { Pokemon } from "../models/pokemon";
import "./PokemonList.scss";

interface Props {
  currentPokemon: Pokemon | undefined;
  setCurrentPokemon: React.Dispatch<React.SetStateAction<Pokemon | undefined>>;
}

function PokemonList({ setCurrentPokemon, currentPokemon }: Props) {
  const [searchedPokemon, setSearchedPokemon] = useState<string>("");
  const [selected, setSelected] = useState<string>("");
  const { pokemonList } = useGetFirstGen();
  const { pokemonInfo, getPokemon } = usePokemon();

  useEffect(() => {
    setCurrentPokemon(pokemonInfo);
  }, [pokemonInfo]);

  const filteredList = pokemonList?.results.filter((pokemon) => {
    return pokemon.name.toLowerCase().includes(searchedPokemon.toLowerCase());
  });

  const handleClick = (pokemon: any) => {
    return (event: React.MouseEvent) => {
      getPokemon(pokemon);
      setSelected(pokemon);
    };
  };

  return (
    <div className="PokemonList">
      <div className="list-container">
        <div className="input-container">
          <input
            type="search"
            name="searchedPokemon"
            value={searchedPokemon}
            onChange={(e) => setSearchedPokemon(e.target.value)}
            placeholder="Start typing to filter"
          />
        </div>
        {filteredList?.length ? (
          <div className="list">
            {filteredList.map((pokemon) => (
              <button
                key={pokemon.name}
                className={`list-item ${
                  pokemon.name === selected ? " selected" : ""
                }`}
                onClick={handleClick(pokemon.name)}
              >
                {pokemon.name}
              </button>
            ))}
          </div>
        ) : (
          <p className="empty-state">
            There arent any Pokémon matching
            <b>{searchedPokemon}</b>
          </p>
        )}
      </div>
    </div>
  );
}

export default PokemonList;
