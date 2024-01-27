import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice.js";
import iceSlice from "../features/iceCream/iceSlice.js";

const store = configureStore({
  reducer: {
    cake: cakeSlice,
    iceCream: iceSlice,
  },
});

export default store;
