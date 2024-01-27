import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount, reset } from "./counterSlice";

const Counter = () => {
  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.count);
  console.log(count);
  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(amount));
  };
  const resetAmount = () => {
    setAmount(0);
  };

  return (
    <div>
      <button style={{ color: "blue" }} onClick={() => dispatch(reset())}>
        Reset Counter
      </button>
      <p style={{ color: "red" }}>Counter: {count}</p>
      <div>
        <button onClick={handleIncrement}>Increment(+)</button>
        <button onClick={() => dispatch(decrement())}>Decrement(-)</button>

        <div>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <button onClick={handleIncrementByAmount}>Increment By Amount</button>
          <button style={{ color: "blue" }} onClick={resetAmount}>
            Reset Amount
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
