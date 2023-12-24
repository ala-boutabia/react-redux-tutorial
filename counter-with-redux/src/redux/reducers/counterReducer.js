import { DECREMENT, INCREMENT } from "../actions/types";

const counterReducer = (state = { count: 0 }, action) => {
  /*
  if (action.type === INCREMENT) {
    return state.count + 1;
  }
  if (action.type === DECREMENT) {
    return state.count - 1;
  }
  */
  switch (action.type) {
    case INCREMENT:
      return state.count + 1;
    case DECREMENT:
      return state.count + 1;
    default:
      return state;
  }
};

export default counterReducer;
