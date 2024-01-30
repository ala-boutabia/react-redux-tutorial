import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import cakeSlice from "../features/cake/cakeSlice.js";
import iceSlice from "../features/iceCream/iceSlice.js";
import userSlice from "../features/users/userSlice.js";

const { createLogger } = logger;
const log = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeSlice,
    iceCream: iceSlice,
    user: userSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(log),
});

export default store;
