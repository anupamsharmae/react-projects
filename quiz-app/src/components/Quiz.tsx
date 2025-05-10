import { useCallback, useState } from "react";
import QUESTOINS from "../scripts/questions";
import Question from "./Question";
import Summary from "./Summary";

export default function Quiz() {
   const [userAns, setUserAns] = useState<(string | null)[]>([]);
   const activeQuesIndex = userAns.length;

   const handleClick = useCallback((answer: string | null) => {
      setUserAns((prevState: (string | null)[]) => {
         return [...prevState, answer];
      });
   }, [])

   const handleSkippedAns = useCallback(() => {
      handleClick(null);
   }, [handleClick])


   const quizCompleted = activeQuesIndex === QUESTOINS.length;


   if (quizCompleted) {
      return <Summary userAnswers={userAns}/>
   }



   return (
      <div id="quiz">
         <Question
            key={activeQuesIndex}
            index={activeQuesIndex}
            onSelectAnswer={handleClick}
            onSkippedAnswer={handleSkippedAns}
         />

      </div>
   )
}