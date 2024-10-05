import { ChangeEvent, FC, useContext, useState } from "react";
import styles from "./styles.module.css";
import { TodosContext } from "../../context/todos-context";

const TodoInput: FC = () => {
  const [value, setValue] = useState<string>("");
  const { todos, setTodos } = useContext(TodosContext);

  const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleAddTodo = () => {
    const newTodo = {
      id: crypto.randomUUID(),
      title: value,
      completed: false,
    };
    if (value !== "") {
      setTodos([...todos, newTodo]);
    }
    setValue("");
  };

  return (
    <div className={styles.todo_input}>
      <input
        className={styles.input}
        type="text"
        placeholder="What needs to be done?"
        onChange={(event) => handleInput(event)}
        value={value}
      />
      <button className={styles.add_todo} onClick={() => handleAddTodo()}>
        Add
      </button>
    </div>
  );
};

export default TodoInput;
