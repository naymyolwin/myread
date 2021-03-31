import React from "react";
import { Link } from "react-router-dom";

import Book from "./book";

function booklist(props) {
  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {props.bookslist.map((book) =>
                  book.shelf === "currentlyReading" ? (
                    <li key={book.id}>
                      <Book
                        book={book}
                        shelf={book.shelf}
                        changeshelf={props.changeshelf}
                      />
                    </li>
                  ) : null
                )}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {props.bookslist.map((book) =>
                  book.shelf === "wantToRead" ? (
                    <li key={book.id}>
                      <Book
                        book={book}
                        shelf={book.shelf}
                        changeshelf={props.changeshelf}
                      />
                    </li>
                  ) : null
                )}
              </ol>
            </div>
          </div>
          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {props.bookslist.map((book) =>
                  book.shelf === "read" ? (
                    <li key={book.id}>
                      <Book
                        book={book}
                        shelf={book.shelf}
                        changeshelf={props.changeshelf}
                      />
                    </li>
                  ) : null
                )}
              </ol>
            </div>
          </div>
        </div>
      </div>
      <div className="open-search">
        <Link to="/search">Add a book</Link>
      </div>
    </div>
  );
}

export default booklist;
