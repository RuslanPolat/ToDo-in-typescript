import React from "react";

interface ToDoitemProps {
  todo: Todo;
  toggleComplete: ToggleComplete;
}

export const ToDoitem: React.FC<ToDoitemProps> = ({ todo, toggleComplete }) => {
  return (
    <li className="todo-li">
      <label className={todo.complate ? "todo-row completed" : "todo-row"} />
      <input 
        type="checkbox"
        onChange={() => toggleComplete(todo)}
        checked={todo.complate}
      />
      {todo.text}
    </li>
  );
};
