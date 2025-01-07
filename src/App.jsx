import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
function App() {
    const [todos, setTodos] = useState([]);

    const addTodo = (text) => {
        if (text.trim()) {
            const newTodo = {
                id: Date.now(),
                text,
                completed: false,
            };
            setTodos([...todos, newTodo]);
        }
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    const toggleCompleted = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <>
            <div>Todo App</div>
            <TodoForm addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleCompleted={toggleCompleted} />
        </>
    );
}
export default App;
