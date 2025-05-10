import { createContext, useReducer } from "react";

const initialValue = { count: 0 };
const counterCtx = {
   count: 0,
   increment: () => { },
   decrement: () => { },
   reset: () => { }
}

export const CounterContext = createContext(counterCtx)



const counterReducerFn = (state: unknown, action: unknown) => {
   const actionDispatcher: Record<string, (state: any) => any> = {
      // 'INCREMENT': increment,
      // 'DECREMENT': decrement,
      // 'RESET': reset
      'INCREMENT': (state: unknown) => ({ count: state.count++ }),
      'DECREMENT': (state: unknown) => ({ count: state.count-- }),
      'RESET': () => ({ count: 0 })
   }

   return actionDispatcher[action.type](state) || state;
}



export default function CounterReducer({ children }: { children: React.ReactNode }) {
   const [counterState, counterDispatcher] = useReducer(counterReducerFn, initialValue);

   const handleIncrement = () => {
      counterDispatcher({
         type: 'INCREMENT'
      })
   }

   const handleDecrement = () => {
      counterDispatcher({
         type: 'DECREMENT'
      })
   }

   const handleReset = () => {
      counterDispatcher({
         type: 'RESET'
      })
   }


   const counterCtx = {
      count: counterState.count,
      increment: handleIncrement,
      decrement: handleDecrement,
      reset: handleReset
   }


   return (
      <CounterContext.Provider value={counterCtx}>
         {children}
      </CounterContext.Provider>
   )

}