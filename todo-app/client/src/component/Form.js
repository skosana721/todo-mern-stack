import React, { useState } from "react";

function Form() {
  const [todoList, setTodoList] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
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
