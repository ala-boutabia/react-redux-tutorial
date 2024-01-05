import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    title: "title 01",
    content: "hello world from redux toolkit",
  },
  {
    id: 2,
    title: "title 02",
    content: "hello world from redux toolkit",
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload);
      // payload = form data
    },
  },
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded } = postsSlice.actions;

export default postsSlice.reducer;
