import { useRef } from "react";

export default function Answers({ answers, selectedAnswer, answerState, onSelect }: { answers: string[]; selectedAnswer: string | null; answerState: string; onSelect: (ans: string | null) => void }) {
   const suffledAnswers = useRef<string[]>([]);

   if (suffledAnswers.current.length === 0) {
      suffledAnswers.current = [...answers];
      suffledAnswers.current.sort(() => Math.random() - 0.5);
   }

   return (
      <ul id="answers">
         {suffledAnswers.current.map((ans, index) => {
            const isSelected = selectedAnswer === ans;
            let cssClass = '';
            if (answerState === 'answered' && isSelected) {
               cssClass = 'selected';
            }
            if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
               cssClass = answerState;
            }

            return (
               <li key={index} className="answer">
                  <button
                     type="button"
                     className={cssClass}
                     onClick={() => onSelect(ans)}
                     disabled={answerState !== ''}
                     >{ans}</button>
               </li>
            )
         }
         )}
      </ul>
   )
}