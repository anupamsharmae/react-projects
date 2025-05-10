import { useState } from 'react';
import GameBoard from './components/GameBoard/GameBoard'
import Player from './components/Player/Player'
import Log from './components/Log/Log';
import GameOver from './components/GameOver/GameOver';
import { deriveActivePlayer, deriveWinner, dervieGameBoard, setGameTurnsCB, setPlayerCB } from './helpers/helpers';
import { GameTurn, PlayerState } from './Models/Models';
import { PLAYERS } from './Constants/AppConstant';
import './App.css'

function App() {
	const [player, setPlayer] = useState<PlayerState>(PLAYERS);
	const [gameTurns, setGameTurns] = useState<GameTurn[]>([]);
	const activePlayer = deriveActivePlayer(gameTurns);
	const gameBoard = dervieGameBoard(gameTurns);

	const winner = deriveWinner(gameBoard, player);
	const hasDrawn = gameTurns.length === 9 && !winner;

	/**
	 * This method is used to handle the player move.
	 * Importantly this method is triggered from the `GameBoard` component
	 * - when the player clicks on the cell, it will call this method
	 * - this method will update the game turns in the state
	 * @param rowIndex
	 * @param colIndex
	 */
	const handlePlayerChange = (rowIndex: number, colIndex: number) => {
		setGameTurns((prevGameTurns: GameTurn[]) => setGameTurnsCB({ prevGameTurns, rowIndex, colIndex }));
	}

	/**
	 * This methods is used to reset the board game in the case
	 * - when the player wins the game
	 * - when the game is drawn
	 * then the player can reset the game
	 * @returns
	 */
	const handleReset = () => setGameTurns([]);

	/**
	 * Method used to handle the state update for the player name from the `Player` component
	 *
	 * -  In player component, when the player clicks on the edit button, it will call this method
	 * -  This method will update the player name in the state
	 * @param symbol
	 * @param playerName
	 */
	const handlerPlayerNameChange = (symbol: string, playerName: string) => {
		setPlayer((prevPlayer) => setPlayerCB(prevPlayer, symbol, playerName));
	}

	return (
		<main>
			<div id='game-container'>
				{/* player selection and edit player names */}
				<ol id='players' className='highlight-player'>
					<Player initialName={PLAYERS['X']} symbol='X' isActive={activePlayer === 'X'} onChangeName={handlerPlayerNameChange} />
					<Player initialName={PLAYERS['O']} symbol='O' isActive={activePlayer === 'O'} onChangeName={handlerPlayerNameChange} />
				</ol>
				{/* showing the winner or draw popup */}
				{(winner || hasDrawn) && <GameOver winner={winner} onReset={handleReset} />}
				{/* Gameboard area where players  */}
				<GameBoard board={gameBoard} onPlayerChange={handlePlayerChange} />
			</div>
			<Log turns={gameTurns} />
		</main>
	)
}

export default App;