import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSlice";
/**
 * @description We store the whole state of the app
 *  */

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
