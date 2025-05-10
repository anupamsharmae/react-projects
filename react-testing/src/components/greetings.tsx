import { useState } from "react"
import Output from "./Output";

export default function Greeting() {
   const [changeText, setChangeText] = useState(false);

   const changeTextHandler = () => {
      setChangeText(true);
   }

   return (
      <div>
         <h2>Hello world!</h2>
         {!changeText && <Output>It's good to see you!</Output>}
         {changeText && <Output>Changed!</Output>}
         <button type="button" onClick={changeTextHandler}>Change Text!</button>
      </div>
   )
}