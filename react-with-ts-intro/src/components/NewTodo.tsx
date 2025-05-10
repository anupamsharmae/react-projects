import { useContext, useRef } from "react";
import classes from './NewTodo.module.css';
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
   const todoCtx = useContext(TodosContext)
   const inputRef = useRef<HTMLInputElement>(null);

   const submitHandler = (event: React.FormEvent) => {
      event.preventDefault();

      const enteredText = inputRef.current?.value || '';
      if (enteredText.trim().length === 0) {
         return
      }
      todoCtx.addTodo(enteredText);
   }

   return (
      <form onSubmit={submitHandler} className={classes.form}>
         <label htmlFor="todo_text">Todo text</label>
         <input type="text" id="todo_text" ref={inputRef} />
         <button>Add todo</button>
      </form>
   )
}
export default NewTodo;