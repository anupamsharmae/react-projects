import { useState } from "react"

export default function Player({ initialName, symbol, isActive, onChangeName }: { children?: React.ReactNode, initialName: string, symbol: string, isActive: boolean, onChangeName: (symbol: string, playerName: string) => void }) {
	const [playerName, setPlayerName] = useState(initialName);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing((editing) => !editing);
		// console.log('Editing:', isEditing);
		if(isEditing){
			onChangeName(symbol, playerName);
		}
	}
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setPlayerName(event.target.value);
	}

	const editableplayerNameContent = isEditing
					?
						<input type="text" value={playerName} onChange={handleChange} required/>
					: <span className="player-name">{playerName}</span>;
	const btnCaption = isEditing ? "Save" : "Edit";

	return (
		<li className={isActive ? 'active': undefined} >
			<span className="player">
				{editableplayerNameContent}
				<span className="player-symbol">{symbol}</span>
			</span>
			<button onClick={handleEditClick}>{btnCaption}</button>
		</li>
	)
}