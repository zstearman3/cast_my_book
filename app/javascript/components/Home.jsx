import React from "react"
import SearchBar from "./common/SearchBar"

const Home = (props) => {
  const books = props.books;
  const [filteredBooks, setFilteredBooks] = React.useState([]);
  
  return(
    <div className="page-container">
      <div className="home-search col-md-8 offset-md-2">
        <h2>Search for a Book</h2>
        <SearchBar
          title = "Books"
          items={books}
          onFilter={setFilteredBooks}
        />
        <div className="search-results">
          { filteredBooks.slice(0, 10).map((book, index) => {
            return(
              <div className="row" key={index + book.title}>
                <a href={`/casts/new?book_id=${book.id}`} className="search-result">
                  {book.title} - {book.author}
                </a>
              </div>
            )
          })}
        </div>
        <p>Can't find what you want?<a href="/books/new"> Make a new one!</a></p>
      </div>
    </div>
  );
}

export default Home