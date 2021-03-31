import "./App.css";
import Form from "./component/Form";
import GetTodos from "./component/GetTodo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo list</h2>
      </header>
      <Form />
      <GetTodos />
    </div>
  );
}

export default App;
