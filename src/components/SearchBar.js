import React from "react";

const SearchBar = ({ searchHandler, onChange }) => {
  return (
    <div className="search-bar">
      <input type="text" onChange={onChange} autoFocus />
      <span onClick={searchHandler} className="search-btn"></span>
    </div>
  );
};

export default SearchBar;
