import { FC, useContext } from "react";
import TodoList from "../../modules/todo-list";
import ControlPanel from "../../components/control-panel";
import TodoInput from "../../components/todo-input";

import styles from "./styles.module.css";
import { TodosContext } from "../../context/todos-context";

const Home: FC = () => {
  const { todos } = useContext(TodosContext);

  const todoList =
    todos.length !== 0 ? <TodoList /> : <h2>task list is empty</h2>;

  return (
    <div className={styles.todos_page}>
      <h1 className={styles.page_title}>Todos</h1>
      <TodoInput />
      {todoList}
      <ControlPanel />
    </div>
  );
};

export default Home;
