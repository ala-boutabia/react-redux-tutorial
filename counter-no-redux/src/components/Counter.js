import { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);
  const handleIncrement = (counter) => {
    setcount(count + 1);
  };
  const handleDecrement = (counter) => {
    setcount(count - 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
