const TodoList = ({ todos, deleteTodo, toggleCompleted }) => {
    return (
        <ul>
            {todos.map((tod) => (
                <li key={tod.id}>
                    <span
                        style={{
                            textDecoration: tod.completed ? "line-through" : "none",
                        }}
                    >
                        {tod.text}
                    </span>
                    <button onClick={() => toggleCompleted(tod.id)}>
                        {tod.completed ? "uncomplete" : "complete"}
                    </button>
                    <button onClick={() => deleteTodo(tod.id)}>Delete</button>
                </li>
            ))}
        </ul>
    );
};
export default TodoList;