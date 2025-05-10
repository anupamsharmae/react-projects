import { useRef, useState } from "react";
import ResultModel from "../ResultModel/ResultModel";

export default function TimerChallenge({ title, targetTime }: { title: string, targetTime: number }) {
   const timerRef = useRef<NodeJS.Timeout | null>(null);
   const dialogRef = useRef<HTMLDialogElement | null>(null);
   const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

   const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

   if (timeRemaining <= 0) {
      if (timerRef.current !== null) {
         clearTimeout(timerRef.current as NodeJS.Timeout);
      }
      dialogRef.current?.open();
   }
   const handleReset = () => {
      setTimeRemaining(targetTime * 1000);
   }

   const handleStart = () => {
      timerRef.current = setInterval(() => {
         setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
      }, 10);
   }

   const handleStop = () => {
      if (timerRef.current !== null) {
         clearTimeout(timerRef.current as NodeJS.Timeout);
      }
      dialogRef.current?.open();
   }

   return (
      <>
         <ResultModel
            ref={dialogRef}
            targetTime={targetTime}
            remainingTime={timeRemaining}
            onReset={handleReset}
            />
         <section className="challenge">
            <h2>{title}</h2>
            <p className="challenge-time">
               {targetTime} second{targetTime > 1 && 's'}
            </p>
            <p>
               <button type="button" onClick={timerIsActive ? handleStop : handleStart}>
                  {`${timerIsActive ? 'Stop' : 'Start'} Challenge`}
               </button>
            </p>
            <p className={timerIsActive ? 'active' : undefined}>
               {timerIsActive ? 'Time is running ...' : 'Timer inactive'}
            </p>
         </section>
      </>
   )
}