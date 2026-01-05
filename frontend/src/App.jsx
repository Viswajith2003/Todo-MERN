import React, { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

export default function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);
  const handleText = (e) => {
    console.log(e.target.value);
    setTitle(e.target.value);
  };

  const getTodos = async () => {
    const res = await axios.get("http://localhost:5001/api/todos");
    setTodos(res.data);
  };

  const addTodo = async () => {
    await axios.post("http://localhost:5001/api/todos", { title });
    setTitle("");
    getTodos();
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5001/api/todos/${id}`);
    getTodos();
  };

  

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div>
      <h1>ToDo List</h1>
      <div>
        <input
          type="text"
          placeholder="Enter the item"
          value={title}
          onChange={handleText}
        />
        <button onClick={addTodo}>ADD</button>
      </div>
      <div>
        <ul>
          {todos.map((item) => (
            <li key={item._id}>
              {item.title}{" "}
              <button onClick={() => deleteTodo(item._id)}>Dele</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
