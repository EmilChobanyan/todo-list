import React from "react";
import { useSelector } from "react-redux";
import type { RootState } from "../../store";
import TodoItem from "../TodoItem";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todos);

  if (todos.length === 0) {
    return <p>No tasks yet 💤</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;