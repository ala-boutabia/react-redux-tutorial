import { useState } from "react";
import { useSelector } from "react-redux";

const Counter = () => {
  const [count, setcount] = useState(0);
  // useSelector hook
  const countState = useSelector((state) => state.count);
  console.log("The initial state:", countState);

  const handleIncrement = () => {
    setcount(count + 1);
  };
  const handleDecrement = () => {
    setcount(count - 1);
  };

  return (
    <div>
      <p>{countState}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
