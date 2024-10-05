import { FC, useContext } from "react";
import styles from "./styles.module.css";
import type { TodoItem } from "./types";
import { TodosContext } from "../../context/todos-context";

const TodoItem: FC<TodoItem> = ({ id, title, completed }) => {
  const { todos, setTodos } = useContext(TodosContext);

  const handleCompleted = () => {
    const updatedTodo = todos.map((todo) => {
      if (id === todo.id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    console.log("updated", updatedTodo);
    setTodos([...updatedTodo]);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.todo_item}>
        <input
          onChange={() => handleCompleted()}
          className={styles.todo_checkbox}
          type="checkbox"
          id={`todo-${id}`}
          checked={completed}
        />
        <label htmlFor={`todo-${id}`}>
          <h2 className={styles.title}>
            {completed ? <s className={styles.completed}>{title}</s> : title}
          </h2>
        </label>
      </div>
    </div>
  );
};

export default TodoItem;
