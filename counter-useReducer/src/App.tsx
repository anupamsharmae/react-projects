// import { use } from 'react';
import './App.css';
import Counter from './components/counter';
import CounterReducer from './store/counterContext';

function App() {
  // const {counter} = use(CounterContext)
  console.log('App -----');
  return (
    <CounterReducer>
      <div id=''>
        <h1>THE FINAL COUNTER</h1>
        <Counter />
        {/* <p id='counter'>{counter}</p> */}
      </div>
    </CounterReducer>
  )
}

export default App
