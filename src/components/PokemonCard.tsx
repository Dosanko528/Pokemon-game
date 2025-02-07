import React  from "react";
import { Pokemon } from "../models/pokemon";


//PokemonCardPropsの型をPokemonに設定
interface PokemonCardProps {
    pokemon: Pokemon;
}

//ポケモンカードのコンポーネントを作成
const PokemonCard: React.FC<PokemonCardProps> = ({ pokemon }) => {
    return (
        <div className="border p-4 rounded-lg shadow-md text-center">
            <h2 className="text-xl font-bold">{pokemon.name}</h2>
            <p>Type: {pokemon.type}</p>
            <p>HP: {pokemon.hp}</p>
            <p>Attack: {pokemon.attack}</p>
            <p>Defense: {pokemon.defense}</p>
        </div>
    );
};

export default PokemonCard;