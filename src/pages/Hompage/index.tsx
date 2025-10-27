import TodoInput from "../../components/TodoInput";
import TodoList from "../../components/TodoList";

export const Hompage = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "2rem" }}>
            <h2>🧠 TaskMaster (Redux Toolkit Todo App)</h2>
            <p>Use Redux Toolkit to manage all your tasks easily ⚙️</p>
            <TodoInput />
            <TodoList />
        </div>
    );
}