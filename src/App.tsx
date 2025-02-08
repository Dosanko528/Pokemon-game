import React  from "react";
import { pokemonList } from "./data/pokemon";
import PokemonCard  from "./components/PokemonCard";

//バトル用UIの設定のためのインポート
import Battle from "./components/Battle";
import { useBattleStore } from "./store/battleStore";



//React関数型コンポーネントを作成
const App: React.FC = () => {
  const [selectedPokemon, setSelectedPokemon] = useState<number | null>(null);
  const { selectPokemon } = useBattleStore();

  const handleStartBattle = () => {
    if (selectedPokemon !== null) {
      selectPokemon(pokemonList[selectedPokemon], pokemonList[1]); // 例として Charmander を相手に
    }
  };

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-center mb-4">ポケモンバトル</h1>

      <div className="grid grid-cols-2 gap-4">
        {pokemonList.map((pokemon, index) => (
          <div
            key={pokemon.id}
            className={`cursor-pointer ${
              selectedPokemon === index ? "border-2 border-blue-500" : ""
            }`}
            onClick={() => setSelectedPokemon(index)}
          >
            <PokemonCard pokemon={pokemon} />
          </div>
        ))}
      </div>

      <button
        className="mt-4 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 block mx-auto"
        onClick={handleStartBattle}
      >
        バトル開始！
      </button>

      <Battle />
    </div>
  );
};

export default App;
