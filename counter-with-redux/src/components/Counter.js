import { useDispatch, useSelector } from "react-redux";
import { DECREMENT, INCREMENT } from "../redux/actions/types";

const Counter = () => {
  // useSelector hook
  const countState = useSelector((state) => state.count);
  //const {state} = useSelector(state => state);
  //console.log("The initial state:", countState);
  // Make the action call the reducer
  const dispatch = useDispatch();

  const handleIncrement = () => {
    //setcount(count + 1);
    dispatch({
      type: INCREMENT,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: DECREMENT,
    });
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
