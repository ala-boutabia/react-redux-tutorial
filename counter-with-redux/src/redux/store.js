import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./reducers/counterReducer";

const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = configureStore(
  {
    reducer: counterReducer,
  },
  enhancer()
);

export default store;
