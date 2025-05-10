import './App.css'
import NewTodo from './components/NewTodo';
import Todos from './components/Todos'
import TodoContextProvider from './store/todos-context';

// const todo = [new Todo('Learn React'), new Todo('Learn typescript')];

function App() {

  return (
    <TodoContextProvider>
      <NewTodo />
      <Todos  />
    </TodoContextProvider>
  )
}

export default App
