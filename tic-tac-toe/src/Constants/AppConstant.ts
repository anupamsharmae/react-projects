import { PlayerState } from "../Models/Models"

export const INITIAL_GAMEBOARD: (string | null)[][] = [
   [null, null, null],
   [null, null, null],
   [null, null, null],
]
export const PLAYERS: PlayerState = {
   X: 'Player 1',
   O: 'Player 2',
}