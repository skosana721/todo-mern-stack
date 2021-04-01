import {
  ADD_TODOS,
  CLOSE_MODAL,
  DELETE_TODOS,
  GET_TODOS,
  OPEN_MODAL,
} from "../actionTypes/todos";

const initialState = {
  todoList: [],
  isModalOpen: false,
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
    case DELETE_TODOS:
      return {
        ...state,
        todoList: state.todoList.filter((todo) => todo._id !== action.payload),
      };
    case OPEN_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    case CLOSE_MODAL:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      };
    default:
      return state;
  }
};
