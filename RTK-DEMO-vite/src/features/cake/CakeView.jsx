import { useDispatch, useSelector } from "react-redux";
import { cakeActions } from "./cakeSlice";

const CakeView = () => {
  const nbrCakes = useSelector((state) => state.cake.numberOfCakes); // (state.reducer.initialState)
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Number of cakes: {nbrCakes} </h1>
      <button onClick={() => dispatch(cakeActions.order())}>
        Order Cake(one iceCream bonus){" "}
      </button>
      <button onClick={() => dispatch(cakeActions.restocked(5))}>
        Restock Cake
      </button>
    </div>
  );
};
export default CakeView;
