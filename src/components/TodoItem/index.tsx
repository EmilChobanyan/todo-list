import React from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import { deleteTodo, toggleTodo } from "../../todoSlice";
import type { TodoItemProps } from "./Type";

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <li
      style={{
        textDecoration: todo.completed ? "line-through" : "none",
        marginBottom: "0.5rem",
      }}
    >
      <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
      <button onClick={() => dispatch(deleteTodo(todo.id))}>🗑</button>
    </li>
  );
};

export default TodoItem;