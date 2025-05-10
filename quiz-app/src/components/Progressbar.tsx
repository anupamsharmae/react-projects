import { useEffect, useState } from "react";

export default function Progressbar({ timeout, mode, onTimeout }: { timeout: number; mode: string; onTimeout: () => void }) {
   const [remainingTime, setRemainingTime] = useState(timeout);

   useEffect(() => {
      const timer = setTimeout(onTimeout, timeout);
      return () => clearTimeout(timer);
   }, [timeout, onTimeout]);


   useEffect(() => {
      const timer = setInterval(() => {
         setRemainingTime(prevTime => prevTime - 100);
      }, 100);

      return () => clearInterval(timer);
   }, [])

   return <progress
      id="question-time"
      max={timeout}
      value={remainingTime}
      className={mode}
      />
}