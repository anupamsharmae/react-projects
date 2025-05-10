import { useEffect } from "react";
import ProgessBar from "./progessbar";

const TIMER = 3000;

export default function DeleteConfirmation({ onConfirm, onCancel }: { onConfirm: () => void; onCancel: () => void }) {


   useEffect(() => {
      const timer = setTimeout(() => {
         onConfirm();
      }, TIMER);
      return () => clearTimeout(timer);
   }, [onConfirm])

   return (
      <div id="deleteConfirmation">
         <h2>Are you sure?</h2>
         <p>Do you really want to remove this place?</p>
         <div id="confirmationActions">
            <button onClick={onCancel} className="button-text">
               No
            </button>
            <button onClick={onConfirm} className="button">
               Yes
            </button>
         </div>
         <ProgessBar timerInterval={TIMER}/>
      </div>
   )
}