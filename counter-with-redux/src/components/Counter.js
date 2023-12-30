import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
  incByAmountAction,
} from "../redux/actions/counterAction";
import { useState } from "react";
import { DEC_BY_AMOUNT } from "../redux/actions/types";

const Counter = () => {
  const [amount, setAmount] = useState(0);
  // useSelector hook
  const countState = useSelector((state) => state.count);
  //const {state} = useSelector(state => state);
  //console.log("The initial state:", countState);
  // Make the action call the reducer
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(incrementAction());
  };
  const handleDecrement = () => {
    dispatch(decrementAction());
  };
  const handleIncByAmount = (value) => {
    dispatch(incByAmountAction(value));
  };
  const handleDecByAmount = (value) => {
    dispatch({
      type: DEC_BY_AMOUNT,
      payload: value,
    });
  };

  const onAmountChange = (e) => setAmount(e.target.value);
  console.log(amount);
  return (
    <div>
      <p>{countState}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <br />
        <input type="number" value={amount} onChange={onAmountChange} />
        <button onClick={() => handleIncByAmount(amount)}>
          Increment by amount
        </button>
        <button onClick={() => handleDecByAmount(amount)}>
          Decrement by amount
        </button>
      </div>
    </div>
  );
};

export default Counter;
