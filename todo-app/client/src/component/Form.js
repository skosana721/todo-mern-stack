import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodos } from "../redux/actions/todos";

function Form() {
  const [todoList, setTodoList] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (todoList) {
      dispatch(addTodos(todoList));
      setTodoList("");
    }
  };
  return (
    <div>
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

export default Form;
