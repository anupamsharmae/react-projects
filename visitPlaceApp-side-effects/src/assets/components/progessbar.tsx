import { useEffect, useState } from "react";

export default function ProgessBar({ timerInterval }: { timerInterval: number }) {
   const [remainingTime, setRemainingTime] = useState(timerInterval);

   useEffect(() => {
      const timer = setInterval(() => {
         setRemainingTime((prevTime) => prevTime - 10);
      }, 10);
      return () => clearInterval(timer);
   }, [])
   return <progress value={remainingTime} max={timerInterval} />
}