import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  numberOfIceCream: 20,
};

const iceSlice = createSlice({
  name: "iceCream",
  initialState,
  reducers: {
    sell: (state) => {
      state.numberOfIceCream--;
    },
    restock: (state, action) => {
      state.numberOfIceCream += action.payload;
    },
  },
});

export const { sell, restock } = iceSlice.actions;

export default iceSlice.reducer;
