import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState,
  reducers: {
    order: (state) => {
      state.numberOfCakes--;
    },
    restocked: (state, action) => {
      state.numberOfCakes += action.payload;
    },
  },
});

export const cakeActions = cakeSlice.actions;

export default cakeSlice.reducer;
