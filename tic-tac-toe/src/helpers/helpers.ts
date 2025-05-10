import { INITIAL_GAMEBOARD } from "../Constants/AppConstant";
import { WINNING_COMBOS } from "../Constants/WiningCombination";
import { GameTurn, PlayerState } from "../Models/Models";


/**
 * Helper method to derive the active player
 * @param gameTurns
 * @returns
 */
export function deriveActivePlayer(gameTurns: GameTurn[]): string {
	return (gameTurns.length > 0 && gameTurns[0].player === 'X') ? 'O' : 'X';
}

/**
 * Helper method to derive the winner of the game
 * - This method is used to derive the winner of the game
 * @param gameBoard
 * @param player
 * @returns
 */
export function deriveWinner(gameBoard: (string | null)[][], player: { X: string; O: string; }): string | null {
	let winner = null;
	for (const winningCombo of WINNING_COMBOS) {
		const firstSquare: string | null = gameBoard[winningCombo[0].row][winningCombo[0].column];
		const secondSquare: string | null = gameBoard[winningCombo[1].row][winningCombo[1].column];
		const thirdSquare: string | null = gameBoard[winningCombo[2].row][winningCombo[2].column];

		const isWinner = firstSquare && firstSquare === secondSquare && firstSquare === thirdSquare;
		if (isWinner) {
			winner = player[firstSquare as string] as string;
			break;
		}
	}
	return winner;
}

/**
 * Helper method to derive the game board from the game turns
 * - This method is used to derive the game board from the game turns
 * - This method is used to update the game board in the `GameBoard` component
 * - This method is used to update the game board in the `GameOver` component
 * @param gameTurns
 * @returns
 */
export function dervieGameBoard(gameTurns: GameTurn[]): (string | null)[][] {
	const gameBoard = JSON.parse(JSON.stringify(INITIAL_GAMEBOARD));
	for (const turn of gameTurns) {
		const { square, player } = turn;
		const { rowIndex, colIndex } = square;
		gameBoard[rowIndex][colIndex] = player;
	}
	return gameBoard;
}

/**
 * Callback method to update the game turns in state hook
 * @param param0
 * @returns
 */
export function setGameTurnsCB({ prevGameTurns, rowIndex, colIndex }: { prevGameTurns: GameTurn[], rowIndex: number, colIndex: number }) {
	const currentPlayer = deriveActivePlayer(prevGameTurns);
	const updatedTurns = [{
		square: { rowIndex, colIndex },
		player: currentPlayer,
	}, ...prevGameTurns];

	return updatedTurns;
}

/**
 * Callback method to update the player name in state hook
 * @param prevPlayer
 * @param symbol
 * @param playerName
 * @returns
 */
export function setPlayerCB(prevPlayer: PlayerState, symbol: string, playerName: string) {
	return {
		...prevPlayer,
		[symbol]: playerName,
	}
}