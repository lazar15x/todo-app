import { FC, useContext } from "react";
import styles from "./styles.module.css";
import { TodosContext } from "../../context/todos-context";
import { FilterContext } from "../../context/filter-context";

const btns = [
  { id: 0, title: "All" },
  { id: 1, title: "Active" },
  { id: 2, title: "Completed" },
];

const ControlPanel: FC = () => {
  const { todos, setTodos } = useContext(TodosContext);
  const { currentFilter, setCurrentFilter } = useContext(FilterContext);
  const remainingTodos = todos.filter((todo) => todo.completed !== true);

  console.log("remaining", remainingTodos);
  console.log("todos", todos);

  return (
    <div className={styles.control_panel}>
      <div>{remainingTodos.length} items left</div>
      <div className={styles.btns}>
        {btns.map((btn) => (
          <button
            onClick={() => setCurrentFilter(btn.id)}
            className={currentFilter === btn.id ? styles.active_btn : ""}
            key={btn.id}
          >
            {btn.title}
          </button>
        ))}
      </div>
      <button onClick={() => setTodos([...remainingTodos])}>
        Clear completed
      </button>
    </div>
  );
};

export default ControlPanel;
