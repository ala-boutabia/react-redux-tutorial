import { useDispatch, useSelector } from "react-redux";
import {
  decrementAction,
  incrementAction,
} from "../redux/actions/counterAction";

const Counter = () => {
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

  return (
    <div>
      <p>{countState}</p>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Counter;
