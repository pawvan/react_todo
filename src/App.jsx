import { useState } from "react";
function App(){
    const [todo,setTodo] =useState([])
    const [text,setText] =useState("")
    const addTodo=(e)=>{
        e.preventDefault()
if(text.trim()){
    const newTodo  ={
        idd:Date.now(),text
    }
    setTodo([...todo,newTodo])
setText("");
}
    }
const deleteTodo =(id)=>{
    setTodo(todo.filter((tod =>tod.id !==id)))
}
    return(
        <>
        <div>Todo-app</div>
<form onSubmit={addTodo}>
    <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
<button type="submit">add</button>
</form>
<ul>
    
    {todo.map((tod) =>(
    <li key={tod.id}>{tod.text}
    <button onClick={()=>deleteTodo(tod.id)}>delete</button>
    </li>
    ))}
</ul>
</>)
}
export default App;