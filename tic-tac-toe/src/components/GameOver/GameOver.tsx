export default function GameOver({winner, onReset}: {winner:string | null, onReset: () => void}) {
   return(
      <div id="game-over">
         {winner ? <h2> {winner} won! </h2>  :  <h2> It's a draw! </h2> }
         {!winner && <h3> No more moves left! </h3>}
         <button onClick={onReset}>Play Again</button>
      </div>
   );
}