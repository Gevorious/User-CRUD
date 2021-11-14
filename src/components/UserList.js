import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers, setFilter } from "../redux/userSlice";
import { transformData } from "../helpers/transformData";
import Filter from "./Filter/Filter";
import SearchBar from "./SearchBar";
import UserListItem from "./UserListItem";
import UserUpdateModal from "./UserUpdateModal";

const UserList = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);
  const filter = useSelector((state) => state.filter);
  const [itemId, setItemId] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch, users]);

  const data = transformData(users);
  const [term, setTerm] = useState("");

  const search = (e) => {
    setTerm(e.target.value);
  };

  const searchFilter = (items, term, filter) => {
    if (term.length === 0) {
      return items;
    }

    return items.filter((item) => {
      return item[filter].toUpperCase().indexOf(term.toUpperCase()) > -1;
    });
  };

  const visibleItems = searchFilter(data, term, filter);

  return (
    <div className="user-list">
      <div>
        <SearchBar onChange={search} />
        <Filter />
      </div>
      {visibleItems?.map((user) => {
        return (
          <UserListItem user={user} key={user.key} updateHandler={setItemId} />
        );
      })}
      {itemId && <UserUpdateModal id={itemId} setId={setItemId} />}
    </div>
  );
};

export default UserList;
