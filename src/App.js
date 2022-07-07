import {useState, useEffect} from "react";

function App() {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
    const onChange = (event) => setTodo(event.target.value);
    const onSubmit = (event) => {
        event.preventDefault();
        if(todo === ""){
            return;
        }
        setTodos(currentArray => [todo, ...currentArray]);
        setTodo("");
    }
    console.log(todos);
    return <div>
        <h1>My to dos ({todos.length})</h1>
        <form onSubmit={onSubmit}>
            <input value={todo} onChange={onChange} type={"text"} placeholder={"write your to do..."}/>
            <button>Add to do</button>
        </form>
    </div>
}

export default App;
