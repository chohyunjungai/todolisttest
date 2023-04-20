import React, { useState } from "react";
import "./App.css";

function App() {
  const [title, setTitle] = useState("");
  const [todos, setTodos] = useState([]);

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };

  const addTodo = () => {
    const newTodo = {
      title: title,
    };
    setTodos([...todos, newTodo]);
    setTitle("");
  };

  return (
    <div className="App">
      <div>
        <input type="text" value={title} onChange={handleTitleChange} />
        <button onClick={addTodo}>추가하기</button>
      </div>
      <div>
        <h2 className="app-title">Todo List</h2>
        {todos.map((todo, index) => {
          return (
            <div className="square-style" key={index}>
              {todo.title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
