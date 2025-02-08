import React from "react";
import { useBattleStore } from "../store/battleStore";


const Battle: React.FC = () => {
    const { playerPokemon, opponentPokemon, attack } = useBattleStore();

    if (!playerPokemon || !opponentPokemon) {
        return <p className="text-center text-xl">ポケモンを選択してください</p>;
    }

    return (
        <div className="p-6 text-center">
            <h2 className="text-2xl font-bold">バトル開始！</h2>

            <div className="flex justify-around mt-4">
                <div className="border p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold">{playerPokemon.name}</h3>
                    <p>HP: {playerPokemon.hp}</p>
                </div>

                <div className="border p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold">{opponentPokemon.name}</h3>
                    <p>HP: {opponentPokemon.hp}</p>
                </div>
            </div>


            <button
             className="mt-4 px-6 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700"
             onClick={attack}
             >
                攻撃！
             </button>
        </div>
    );
};

export default Battle;