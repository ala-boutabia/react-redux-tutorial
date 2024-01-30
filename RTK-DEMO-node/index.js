import { ordered, restocked } from "./features/cake/cakeSlice.js";
import { sell, restock } from "./features/iceCream/iceSlice.js";
import store from "./app/store.js";
import { fetchUsers } from "./features/users/userSlice.js";

console.log("Initial state: ", store.getState());
const unsubscribe = store.subscribe(() => {
  console.log("Updated state", store.getState());
});
// logger will replace it

store.dispatch(fetchUsers());

/*
// Cake actions
console.log("\n**************** Cake actions begin *****************");
store.dispatch(ordered());
store.dispatch(ordered());
store.dispatch(ordered());
store.dispatch(restocked(3));

// IceCream actions
console.log(
  "\n**************** IceCream actions begin with one iceCream gifted for free ****************"
);
store.dispatch(sell());
store.dispatch(sell());
store.dispatch(sell());
store.dispatch(restock(3));
*/

//unsubscribe();
