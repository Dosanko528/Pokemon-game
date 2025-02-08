//バトルに必要な情報をZustandで管理
import { create } from "zustand";
import { Pokemon } from "../models/pokemon";


//Zustandの状態管理
interface BattleState {
    playerPokemon: Pokemon | null;
    opponentPokemon: Pokemon | null;
    selectPokemon: (player: Pokemon, opponent: Pokemon) => void;
    attack: () => void;
}


export const useBattleStore = create<BattleState>((set) => ({
    playerPokemon: null,
    opponentPokemon: null,
    selectPokemon: (player,opponent) => 
        set({ playerPokemon: player, opponentPokemon: opponent}),
    attack: () => 
    set((state) => {
        if (!state.playerPokemon || !state.opponentPokemon) return state;

        const newOpponentHP = state.opponentPokemon.hp - state.playerPokemon.attack;
        const newPlayerHP = state.playerPokemon.hp - state.opponentPokemon.attack;

        return {
            playerPokemon: { ...state.playerPokemon, hp: Math.max(newPlayerHP,0) },
            opponentPokemon: { ...state.opponentPokemon, hp: Math.max(newOpponentHP,0) },
        };
    }),
}));