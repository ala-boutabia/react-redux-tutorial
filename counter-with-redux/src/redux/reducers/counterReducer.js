import {
  DECREMENT,
  DEC_BY_AMOUNT,
  INCREMENT,
  INC_BY_AMOUNT,
} from "../actions/types";

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case INC_BY_AMOUNT: {
      return { ...state, count: state.count + Number(action.payload) };
    }
    case DEC_BY_AMOUNT: {
      return { ...state, count: state.count - 5 };
    }
    default:
      return state;
  }
};

export default counterReducer;
