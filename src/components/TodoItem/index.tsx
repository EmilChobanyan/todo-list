import React from "react";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../store";
import type { Todo } from "../../todoTypes";
import { deleteTodo, toggleTodo } from "../../todoSlice";

interface Props {
  todo: Todo;
}

const TodoItem: React.FC<Props> = ({ todo }) => {
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