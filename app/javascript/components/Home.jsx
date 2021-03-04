import React from "react"
import SearchBar from "./common/SearchBar"

const Home = (props) => {
  const books = props.books;
  return(
    <div className="page-container">
      <div className="home-search col-md-8 offset-md-2">
        <h2>Search for a Book</h2>
        <SearchBar
          items={books}
        />
        <p>Can't find what you want?<a href=""> Make a new one!</a></p>
      </div>
    </div>
  );
}

export default Home