import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByAmount } from "../redux/counterSlice";

const Counter = () => {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  const handleIncrementByAmount = (value) => {
    dispatch(incrementByAmount(value));
  };

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={handleIncrement}>Increment(+)</button>
      <button onClick={handleDecrement}>Decrement(-)</button>
      <button onClick={() => handleIncrementByAmount(20)}>
        Increment By Amount(+)
      </button>
    </div>
  );
};

export default Counter;
