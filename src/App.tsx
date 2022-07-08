import React from 'react';
import './App.scss';
import PokemonList from './pokemon-list/PokemonList';
import PokemonViewer from './pokemon-viewer/PokemonViewer';

function App() {
  return (
    <div className="App">
      <PokemonList />
      <PokemonViewer />
    </div>
  );
}

export default App;
