import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice";
import iceSlice from "../features/iceCream/iceCream";
import userSlice from "../features/user/userSlice";

const store = configureStore({
  reducer: {
    cake: cakeSlice,
    iceCream: iceSlice,
    user: userSlice,
  },
});

export default store;
