import { configureStore } from "@reduxjs/toolkit";
import postsReducer from "../features/posts/postsSlice";

/**
 * @description We store the whole state of the app
 *  */

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
});
