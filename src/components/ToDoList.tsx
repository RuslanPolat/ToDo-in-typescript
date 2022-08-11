import React from "react";
import { ToDoitem } from "./ToDoitem";

interface ToDoListProps {
    todos: Array<Todo>;
    toggleComplete: ToggleComplete;
}

export const ToDoList: React.FC<ToDoListProps> = ({todos, toggleComplete}) => {
    return(
        <ul className="todo-ul">
        {todos.map(todo => (
          <ToDoitem
             key={todo.text}
             todo={todo}
             toggleComplete={toggleComplete}
           />
        ))}
       </ul>
    )
}