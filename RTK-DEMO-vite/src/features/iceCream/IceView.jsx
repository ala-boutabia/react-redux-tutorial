import { useDispatch, useSelector } from "react-redux";
import { order, restocked } from "./iceCream";

const IceView = () => {
  const nbrIce = useSelector((state) => state.iceCream.numberOfIce);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of iceCreams: {nbrIce}</h1>
      <button onClick={() => dispatch(order())}>Order IceCream</button>
      <button onClick={() => dispatch(restocked(1))}>Restock IceCream</button>
    </div>
  );
};
export default IceView;
