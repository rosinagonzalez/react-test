import axios from "axios";
import { useState } from "react";
import { Pokemon } from "../models/pokemon";

const apiUrl = "https://pokeapi.co/api/v2";

function usePokemon() {
  const [pokemonInfo, setPokemonInfo] = useState<Pokemon>();
  const [error, setError] = useState<unknown>(null);

  const getPokemon = async (name: any) => {
    try {
      const res = await axios.get<Pokemon>(`${apiUrl}/pokemon/${name}`);
      setPokemonInfo(res.data);
    } catch (error) {
      setError(error);
    }
  };
  return { getPokemon, pokemonInfo };
}

export default usePokemon;
