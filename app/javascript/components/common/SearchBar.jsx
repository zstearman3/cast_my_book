import React from "react"

const SearchBar = (props) => {
  return (
    <div className="main-search">
      <input className="search-bar"
        placeholder={"Search Books"}
      />
    </div>
  );
}

export default SearchBar