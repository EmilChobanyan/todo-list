import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../todoSlice";
import type { AppDispatch } from "../../store";

const TodoInput: React.FC = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = () => {
    if (text.trim() !== "") {
      dispatch(addTodo(text));
      setText("");
    }
  };

  return (
    <div style={{ marginBottom: "1rem" }}>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add new task..."
      />
      <button onClick={handleAdd}>➕ Add</button>
    </div>
  );
};

export default TodoInput;