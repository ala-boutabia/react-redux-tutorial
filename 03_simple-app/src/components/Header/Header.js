import "./header.css";
import { useSelector } from "react-redux";

const Header = () => {
  // from userSlice: initialState we grab the user.name
  const { name } = useSelector((state) => state.user.userData);
  return (
    <div className="header">
      <h1>Redux Tutorial</h1>
      <p>Hello {name}</p>
    </div>
  );
};

export default Header;
