import axios from "axios";
import {
  ADD_TODOS,
  CLOSE_MODAL,
  DELETE_TODOS,
  EDIT_TODOS,
  GET_TODOS,
  OPEN_MODAL,
} from "../actionTypes/todos";

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
export const deleteTodos = (id) => {
  return (dispatch) => {
    axios.delete(`http://localhost:4000/api/todo/${id}`).then((res) => {
      dispatch({
        type: DELETE_TODOS,
        payload: id,
      });
    });
  };
};
export const editTodos = (obj) => {
  const { edit, _id } = obj;

  return (dispatch) => {
    axios.put(`http://localhost:4000/api/todo/${_id}`, { edit }).then((res) => {
      dispatch({
        type: EDIT_TODOS,
      });
    });
  };
};
export const openModal = () => {
  return (dispatch) => {
    dispatch({
      type: OPEN_MODAL,
    });
  };
};
export const closeModal = () => {
  return (dispatch) => {
    dispatch({
      type: CLOSE_MODAL,
    });
  };
};
