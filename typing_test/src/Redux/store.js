import {
  compose,
  applyMiddleware,
  combineReducers,
  legacy_createStore,
} from "redux";

import { typeReducer } from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  typeReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware())
);
