import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";

export default function ResultModel({ targetTime, ref, remainingTime, onReset }: { targetTime: number, ref: React.RefObject<HTMLDialogElement | null>, remainingTime: number }) {
   const dialogRef = useRef<HTMLDialogElement>(null);
   const useLost = remainingTime <= 0;
   const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
   const score = Math.round((1 - (remainingTime / (targetTime * 1000))) * 100);

   useImperativeHandle(ref, () => {
      return {
         open() {
            dialogRef.current?.showModal();
         }
      }
   });

   return createPortal(
      <dialog className="result-modal" ref={dialogRef} onClose={onReset}>
         {useLost && <h2>You Lost !!</h2>}
         {!useLost && <h2>You Won !! score: {score}</h2>}
         <p>The target time was <strong>{targetTime}</strong> seconds.</p>
         <p>You stopped the timer with <strong>{formattedRemainingTime}</strong> seconds left.</p>
         <form method="dialog" onSubmit={onReset}>
            <button type="submit" >Close</button>
         </form>
      </dialog>,
      document.getElementById('modal') as HTMLElement
   )
}