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
    <ul>
      {todos &&
        todos.map((todo) => {
          return (
            <li key={todo._id}>
              <h3>{todo.todo}</h3>
              <i
                className="fas fa-trash"
                onClick={() => dispatch(deleteTodos(todo._id))}
              ></i>
            </li>
          );
        })}
    </ul>
  );
}

export default GetTodos;
