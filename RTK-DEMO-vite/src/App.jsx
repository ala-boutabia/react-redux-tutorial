import "./App.css";
import CakeView from "./features/cake/CakeView";
import IceView from "./features/iceCream/IceView";
import UserList from "./features/user/UserList";

function App() {
  return (
    <>
      <CakeView />
      <IceView />
      <UserList />
    </>
  );
}

export default App;
