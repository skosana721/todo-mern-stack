import { ADD_TODOS, GET_TODOS } from "../actionTypes/todos";

const initialState = {
  todoList: [],
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_TODOS:
      return { ...state, todoList: action.payload };
    case ADD_TODOS:
      return {
        ...state,
        todoList: [...state.todoList, action.payload],
      };
    default:
      return state;
  }
};
