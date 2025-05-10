import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counter';
import authReducer from './auth';



// const counterReducer = (state = initialState, action: { type: string; step: number }) => {
//    const actions: { [x: string]: () => object } = {
//       'increment': () => ({...state, counter: state.counter + 1 }),
//       'decrement': () => ({...state, counter: state.counter - 1 }),
//       'increase': () => ({...state, counter: state.counter + action.step }),
//       'toggle': () => ({ ...state, showCounter: !state.showCounter })
//    }

//    return actions[action.type]?.() ?? state;
// }

// const store = createStore(CounterSlice.reducers);




const store = configureStore({
   reducer: { counter: counterReducer, auth: authReducer }
})



export default store;