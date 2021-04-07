import "./App.css";

import FormModel from "./component/FormModel";
import GetTodos from "./component/GetTodo";
import { useSelector, useDispatch } from "react-redux";
import { openModal } from "./redux/actions/todos";

function App() {
  const modal = useSelector((state) => state.todoList.isModalOpen);
  const { hideButton } = useSelector((state) => state.todoList);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <header className="App-header">
        <h2>Todo list</h2>
      </header>
      <div className="container">
        {modal && <FormModel />}
        <div className="todo-list">
          {hideButton && (
            <button onClick={() => dispatch(openModal())}>Add todo</button>
          )}
          <GetTodos />
        </div>
      </div>
    </div>
  );
}

export default App;
