import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
  incByAmountAction,
} from "../redux/actions/counterAction";
import { INC_BY_AMOUNT } from "../redux/actions/types";
import { useState } from "react";

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
  const handleIncByAmount = (amount) => {
    dispatch({
      type: INC_BY_AMOUNT,
      payload: amount,
    });
  };

  const onAmountChange = (e) => setAmount(e.target.value);
  return (
    <div>
      <p>{countState}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
      <div>
        <br />
        <button onClick={() => handleIncByAmount(amount)}>
          Increment by amount
        </button>
        <input type="number" value={amount} onChange={onAmountChange} />
      </div>
    </div>
  );
};

export default Counter;
