import { createSlice } from "@reduxjs/toolkit";
import { sell } from "../iceCream/iceSlice.js";

const initialState = {
  numberOfCakes: 10,
};

const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numberOfCakes--;
    },
    restocked: (state, action) => {
      state.numberOfCakes += action.payload;
    },
    order2: (state) => {
      state.numberOfCakes - 2;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(sell, (state) => {
      state.numberOfCakes--;
    });
  },
});

export const { ordered, restocked, order2 } = cakeSlice.actions;

export default cakeSlice.reducer;
