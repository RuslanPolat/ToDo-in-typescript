import React, { useState } from "react";
import { StyledApp } from "./style/AppStyle";
import { ToDo } from "./components/ToDo";
import { ToDoList } from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState<Array<Todo>>([]);

  const addTodo: AddTodo = (newTodo) => {
    if (newTodo !== "") {
      setTodos([...todos, { text: newTodo, complate: false }]);
    }
  };

  const toggleComplate: ToggleComplete = selectedTodo => {
    const updateTodos = todos.map(todo => {
      if(todo === selectedTodo) {
        return{...todo, complate: !todo.complate}
      }
      return todo;
    });
    setTodos(updateTodos);
  };

  return (
    <StyledApp>
      <div className="div--wrapper">
        <h2>ToDo App</h2>
        <ToDo addTodo={addTodo} />
        <ToDoList todos={todos} toggleComplete={toggleComplate}/>
      </div>
    </StyledApp>
  );
}

export default App;
