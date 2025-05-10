import React, { createContext, useState } from "react";
import Todo from "../models/todos";

type TodoCtx = {
   items: Todo[];
   addTodo: (id: string) => void;
   removeTodo: (id: string) => void;
}

export const TodosContext = createContext<TodoCtx>({
   items: [],
   addTodo: () => { },
   removeTodo: () => { }
});

const TodoContextProvider: React.FC<{ children: React.ReactNode }> = (props) => {
   const [todos, setTodos] = useState<Todo[]>([]);

   const addTodoHandler = (text: string) => {
      const newTodo = new Todo(text);
      setTodos((prevTodo) => prevTodo.concat(newTodo));
   }


   const removeTodoHandler = (todoId: string) => {
      setTodos((prevTodo) => prevTodo.filter(todo => todo.id !== todoId));
   }

   const todoCtx: TodoCtx = {
      items: todos,
      addTodo: addTodoHandler,
      removeTodo: removeTodoHandler
   }

   return <TodosContext value={todoCtx}> {props.children} </TodosContext>

}

export default TodoContextProvider;