import { DECREMENT, INCREMENT } from "./types";

// Action creator: function return action
export const incrementAction = () => {
  return {
    type: INCREMENT,
  };
};
export const decrementAction = () => {
  return {
    type: DECREMENT,
  };
};
