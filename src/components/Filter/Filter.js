import React from "react";
import FilterBtn from "./FilterBtn";

const Filter = () => {
  const filters = [
    { title: "by name", id: "full_name" },
    { title: "by email", id: "email" },
    { title: "by address", id: "address" },
    { title: "by phone", id: "tel" },
  ];
  return (
    <div className="filter-container">
      {filters.map((filterItem, idx) => (
        <FilterBtn key={`${idx}-${filterItem.id}`} item={filterItem} />
      ))}
    </div>
  );
};

export default Filter;
