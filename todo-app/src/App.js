import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo list</h2>
      </header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter a todo"
          onChange={(e) => setTodoList(e.target.value)}
          value={todoList}
        />
        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default App;
