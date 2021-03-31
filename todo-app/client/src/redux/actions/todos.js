import axios from "axios";
import { ADD_TODOS, GET_TODOS } from "../actionTypes/todos";

export const getTodos = () => {
  return (dispatch) => {
    axios.get("http://localhost:4000/api/todo").then((res) =>
      dispatch({
        type: GET_TODOS,
        payload: res.data,
      })
    );
  };
};

export const addTodos = (todo) => {
  console.log("todo", todo);
  return (dispatch) => {
    axios.post("http://localhost:4000/api/todo", { todo }).then((res) =>
      dispatch({
        type: ADD_TODOS,
        payload: res.data,
      })
    );
  };
};
