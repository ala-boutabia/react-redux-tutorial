import { configureStore } from "@reduxjs/toolkit";
import cakeSlice from "../features/cake/cakeSlice.js";
import iceSlice from "../features/iceCream/iceSlice.js";
import logger from "redux-logger";

const { createLogger } = logger;

const log = createLogger();

const store = configureStore({
  reducer: {
    cake: cakeSlice,
    iceCream: iceSlice,
  },
});

export default store;
