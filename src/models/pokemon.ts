//ポケモンのデータモデルの作成
//PokemonTypeはポケモンのタイプを制限するユニオン型(複数の型を許容)
export type PokemonType = "Fire" | "Water" | "Grass" | "Electric" | "Psychic"

//ポケモンのデータ構造を定義
export interface Pokemon {
    id: number;
    name: PokemonType;
    hp: number;
    attack: number;
    defense: number;
}
