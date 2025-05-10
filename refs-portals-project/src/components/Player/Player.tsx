import { useState, useRef } from "react";

export default function Player() {
   const inputRef = useRef<HTMLInputElement>(null);
   const [playerName, setPlayerName] = useState<string>('');

   const handleClick = () => {
      if (inputRef.current) {
         setPlayerName(inputRef.current.value);
         inputRef.current.value = '';
      }
   };

   return (
      <section id="player">
         <h2>Welcome {playerName || 'unknown entity'}</h2>
         <p>
            <input ref={inputRef} type="text" />
            <button type="button" onClick={handleClick}>Set Name</button>
         </p>
      </section>
   );
}