import cakeSlice from "./features/cake/cakeSlice.js";
import iceSlice from "./features/iceCream/iceSlice.js";
import { ordered, restocked } from "./features/cake/cakeSlice.js";
import store from "./app/store.js";

console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() =>
  console.log("Updated state", store.getState())
);

store.dispatch(ordered());
store.dispatch(ordered());
store.dispatch(ordered());

unsubscribe();
