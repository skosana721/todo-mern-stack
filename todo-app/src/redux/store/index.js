import { createStore, applyMiddleWare, compose } from "redux";
import thunk from "redux-thunk";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(composeEnhancer(applyMiddleWare(thunk)));
