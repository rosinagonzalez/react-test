import axios from 'axios';
import { useEffect, useState } from 'react';
import { PokemonResult } from '../models/pokemon-result';

const apiUrl = 'https://pokeapi.co/api/v2';

function useGetFirstGen() {
  const [pokemonList, setPokemonList] = useState<PokemonResult | null>(null);
  const [error, setError] = useState<unknown>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    (async function () {
      try {
        setLoading(true);
        const res = await axios.get<PokemonResult>(`${apiUrl}/pokemon`, { params: { limit: 151 } });
        setPokemonList(res.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return { pokemonList, error, loading };
}

export default useGetFirstGen;
