import { FC, useContext } from "react";
import Todo from "../../components/todo-item";
import styles from "./styles.module.css";
import type { TodoItem } from "../../components/todo-item/types";
import { TodosContext } from "../../context/todos-context";
import { FilterContext } from "../../context/filter-context";

const TodoList: FC = () => {
  const { todos } = useContext(TodosContext);
  const { currentFilter } = useContext(FilterContext);

  const filteredTodos = () => {
    if (currentFilter === 1) {
      return todos.filter((todo) => !todo.completed);
    }
    if (currentFilter === 2) {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
  };

  return (
    <div className={styles.todo_list}>
      {filteredTodos().map((todo: TodoItem) => (
        <Todo
          key={todo.id}
          id={todo.id}
          title={todo.title}
          completed={todo.completed}
        />
      ))}
    </div>
  );
};
export default TodoList;
