import React from "react";
import { useDispatch } from "react-redux";
import { deleteUser } from "../redux/userSlice";

const UserListItem = ({ user, updateHandler }) => {
  const dispatch = useDispatch();
  return (
    <div className="user-list-item">
      <div className="user-info-wrapper">
        <span className="name"> {`${user.first_name} ${user.last_name}`} </span>
        <span> {user.email} </span>
        <span> {user.address} </span>
        <span> {user.tel} </span>
      </div>
      <div className="user-item-btn-wrapper">
        <span
          className="update-btn"
          onClick={() => {
            updateHandler(user.key);
          }}
        ></span>
        <span
          className="delete-btn"
          onClick={() => dispatch(deleteUser({ id: user.key }))}
        ></span>
      </div>
    </div>
  );
};

export default UserListItem;
