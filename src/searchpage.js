import React from "react";
import { Link } from "react-router-dom";
import Book from "./book";

function searchpage(props) {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to="/" className="close-search" onClick={props.handleClose}>
          Close
        </Link>
        <div className="search-books-input-wrapper">
          <input
            onChange={props.searchInputHandler}
            value={props.query}
            type="text"
            placeholder="Search by title or author"
          />
        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          {props.searchBooksList.map((book) => (
            <li key={book.id}>
              <Book
                book={book}
                shelf={"none"}
                changeshelf={props.changeshelf}
              />
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default searchpage;
