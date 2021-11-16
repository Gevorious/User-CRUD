import React from "react";

const SearchBar = ({ onChange }) => {
  return (
    <div className="search-bar">
      <input type="text" onChange={onChange} autoFocus />
      <span className="search-btn"></span>
    </div>
  );
};

export default SearchBar;
