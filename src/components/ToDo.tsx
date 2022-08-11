import React, { ChangeEvent, useState, FormEvent } from "react";

interface ToDoProps {
  addTodo: AddTodo;
}


export const ToDo: React.FC<ToDoProps> = ({ addTodo }) => {
  const [newTodo, setNewTodo] = useState<string>("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }
    const handleSumbit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();        
        addTodo(newTodo);
        setNewTodo("");
    }

  return (
    <form className="todo-form">
      <input  
        type="text"
        value={newTodo}
        className="todo-input"
        placeholder="add a todo"
        onChange={handleChange}
      />
      <button className="todo-btn" onClick={handleSumbit}>ADD</button>
    </form>
  );
};
