import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../../redux/userSlice";

const FilterBtn = ({ item }) => {
  const dispatch = useDispatch();
  const filter = useSelector((state) => state.filter);
  const isSelected = item.id === filter;
  return (
    <span
      onClick={() => dispatch(setFilter(item.id))}
      className={`filter-btn ${isSelected ? "active" : ""}`}
    >
      {item.title}
    </span>
  );
};

export default FilterBtn;
