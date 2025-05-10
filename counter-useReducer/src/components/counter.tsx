import { use } from "react"
import { CounterContext } from "../store/counterContext"

export default function Counter() {
   const { count, increment, decrement, reset } = use(CounterContext)
   console.log('contuner ------', count)
   return (
      <>
         <p>
            <button type="button" onClick={() => increment()}>INCREMENT</button>
            <button type="button" onClick={() => decrement()}>DECREMENT</button>
            <button type="button" onClick={() => reset()}>RESET</button>
         </p>
         <p id='counter'>{count}</p>
      </>
   )
}