
export default function GameBoard({board, onPlayerChange}: {board:(string | null)[][], onPlayerChange: (rowIndex:number, colIndex:number) => void}) {


	return (
		<ol id="game-board">
			{board.map((row, rowIndex) => (
				<li key={rowIndex}>
					<ol>
						{row.map((playerSymbol, colIndex) => (
							<li key={`${rowIndex}-${colIndex}`}>
								<button onClick={() => onPlayerChange(rowIndex, colIndex)} disabled={!!playerSymbol}>
									{playerSymbol}
								</button>
							</li>
						))}
					</ol>
				</li>
			))}
		</ol>
	)
}