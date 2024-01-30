import { createSlice } from "@reduxjs/toolkit";
import { cakeActions } from "../cake/cakeSlice";

const initialState = {
  numberOfIce: 20,
};

const iceSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    order: (state) => {
      state.numberOfIce--;
    },
    restocked: (state, action) => {
      state.numberOfIce += action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(cakeActions.order, (state) => {
      state.numberOfIce--;
    });
  },
});

export const { order, restocked } = iceSlice.actions;

export default iceSlice.reducer;
