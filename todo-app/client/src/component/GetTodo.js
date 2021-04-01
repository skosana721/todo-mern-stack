import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteTodos, getTodos } from "../redux/actions/todos";

function GetTodos() {
  const dispatch = useDispatch();

  const todos = useSelector((state) => state.todoList.todoList);
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <div>
      {todos &&
        todos.map((todo) => {
          return (
            <div key={todo._id}>
              <h3>{todo.todo}</h3>
              <i
                className="fas fa-trash"
                onClick={() => dispatch(deleteTodos(todo._id))}
              ></i>
            </div>
          );
        })}
    </div>
  );
}

export default GetTodos;
