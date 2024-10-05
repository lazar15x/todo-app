import { useEffect, useRef, useState } from "react";
import Home from "./pages/home";
// import db from "./assets/db.json";
import type { TodoItem } from "./components/todo-item/types";
import { TodosContext } from "./context/todos-context";
import { FilterContext } from "./context/filter-context";

function App() {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const todosValue = { todos, setTodos };

  const [currentFilter, setCurrentFilter] = useState<number>(0);
  const filterValue = { currentFilter, setCurrentFilter };
  const ref = useRef(true);
  useEffect(() => {
    if (ref.current) {
      const data = localStorage.getItem("todos");
      if (data !== null) {
        setTodos(JSON.parse(data));
      }
      ref.current = false;
      console.log(data);
    } else {
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  return (
    <FilterContext.Provider value={filterValue}>
      <TodosContext.Provider value={todosValue}>
        <Home />
      </TodosContext.Provider>
    </FilterContext.Provider>
  );
}

export default App;
