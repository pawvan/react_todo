import { useState } from "react";

function App() {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");

    const addTodo = (e) => {
        e.preventDefault();
        if (text.trim()) {
            const newTodo = {
                id: Date.now(),
                text,
                completed: false,
            };
            setTodo([...todo, newTodo]);
            setText("");
        }
    };
    const deleteTodo = (id) => {
        setTodo(todo.filter((tod) => tod.id !== id));
    };
    const toggleCompleted = (id) => {
        setTodo(
            todo.map((tod) =>
                tod.id === id
                    ? { ...tod, completed: !tod.completed }
                    : tod
            )
        );
    };

    return (
        <>
            <div>Todo-app</div>
            <form onSubmit={addTodo}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                />
                <button type="submit">add</button>
            </form>
            <ul>
                {todo.map((tod) => (
                    <li key={tod.id}>
                        <span
                            style={{
                                textDecoration: tod.completed ? "line-through" : "none",
                            }}
                        >
                            {tod.text}
                        </span>
                        <button type="radio" onClick={() => toggleCompleted(tod.id)}>
                            {tod.completed ? "uncomplete " : " complete  "}
                        </button>
                        <button onClick={() => deleteTodo(tod.id)}>delete</button>
                    </li>
                ))}
            </ul>
        </>
    );
}
export default App;
