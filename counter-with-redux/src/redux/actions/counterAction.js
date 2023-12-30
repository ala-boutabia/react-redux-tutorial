import { DECREMENT, DEC_BY_AMOUNT, INCREMENT, INC_BY_AMOUNT } from "./types";

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

export const incByAmountAction = (amount) => {
  return {
    type: INC_BY_AMOUNT,
    payload: amount,
  };
};
export const decByAmountAction = () => {
  return {
    type: DEC_BY_AMOUNT,
  };
};
