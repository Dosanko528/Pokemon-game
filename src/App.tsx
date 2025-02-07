import React  from "react";
import { pokemonList } from "./data/pokemon";
import PokemonCard  from "./components/PokemonCard";


//React関数型コンポーネントを作成
const App: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">ポケモンリスト</h1>
      <div className="grid grid-cols-2 gap-4">
        {pokemonList.map((pokemon) => (
          <PokemonCard key={pokemon.id} pokemon={pokemon} />
        ))}
      </div>
    </div>
  );
};

export default App;
