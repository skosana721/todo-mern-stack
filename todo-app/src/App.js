import { useState } from "react";
import "./App.css";

function App() {
  const [todoList, setTodoList] = useState("");
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo list</h2>
      </header>
      <form>
        <input
          type="text"
          placeholder="Enter a todo"
          onChange={(e) => setTodoList(e.target.value)}
          value={todoList}
        />
        <button>ADD</button>
      </form>
    </div>
  );
}

export default App;
