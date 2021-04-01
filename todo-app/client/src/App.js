import "./App.css";
import Form from "./component/Form";
import FormModel from "./component/FormModel";
import GetTodos from "./component/GetTodo";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo list</h2>
      </header>
      <div className="container">
        <FormModel />
        <div className="todo-list">
          <Form />
          <GetTodos />
        </div>
      </div>
    </div>
  );
}

export default App;
