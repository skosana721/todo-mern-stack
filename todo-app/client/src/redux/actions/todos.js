import axios from "axios";
import { GET_TODOS } from "../actionTypes/todos";

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
