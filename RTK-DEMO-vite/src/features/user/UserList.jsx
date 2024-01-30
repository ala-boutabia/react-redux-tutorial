import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "./userSlice";

const UserList = () => {
  const userData = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);
  return (
    <div>
      <h1>List of users: </h1>
      {userData.loading && <span>Loading...</span>}
      {!userData.loading && userData.error ? (
        <span>Error: {userData.error}</span>
      ) : null}
      {!userData.loading && userData.data.length ? (
        <ul>
          {userData.data.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}{" "}
        </ul>
      ) : null}
    </div>
  );
};
export default UserList;
