import React, { useState } from "react";
import "./App.scss";
import { Pokemon } from "./models/pokemon";
import PokemonList from "./pokemon-list/PokemonList";
import PokemonViewer from "./pokemon-viewer/PokemonViewer";

function App() {
  const [currentPokemon, setCurrentPokemon] = useState<Pokemon | undefined>();

  return (
    <div className="App">
      <PokemonList
        currentPokemon={currentPokemon}
        setCurrentPokemon={setCurrentPokemon}
      />
      <PokemonViewer currentPokemon={currentPokemon} />
    </div>
  );
}

export default App;
