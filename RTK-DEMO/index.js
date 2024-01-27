import { ordered, restocked } from "./features/cake/cakeSlice.js";
import { sell, restock } from "./features/iceCream/iceSlice.js";
import store from "./app/store.js";

console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() => {});
//console.log("Updated state", store.getState())
// logger will replace it

// Cake actions
console.log("**************** Cake actions begin ***************** ");
store.dispatch(ordered());
store.dispatch(ordered());
store.dispatch(ordered());
store.dispatch(restocked(3));

// IceCream actions
console.log("**************** IceCream actions begin ****************");
store.dispatch(sell());
store.dispatch(sell());
store.dispatch(sell());
store.dispatch(restock(3));

unsubscribe();
