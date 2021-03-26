import { createStore, applyMiddleWare, compose } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "../rootReducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleWare(thunk))
);
