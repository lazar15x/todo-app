import { Dispatch, createContext } from "react";
import type TodoItem from "../components/todo-item";

interface TodosContext {
  todos: TodoItem[] | [];
  setTodos: Dispatch<React.SetStateAction<TodoItem[] | []>>;
}

export const TodosContext = createContext<TodosContext>({
  todos: [],
  setTodos: () => [],
});
