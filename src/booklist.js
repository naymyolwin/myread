import React from "react";

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
                {props.booklistarray.map((book) =>
                  book.shelf === "Currently Reading" ? (
                    <li key={book.id}>
                      <Book
                        title={book.title}
                        cover={book.cover}
                        author={book.author}
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
                {props.booklistarray.map((book) =>
                  book.shelf === "Want to Read" ? (
                    <li key={book.id}>
                      <Book
                        title={book.title}
                        cover={book.cover}
                        author={book.author}
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
                {props.booklistarray.map((book) =>
                  book.shelf === "Read" ? (
                    <li key={book.id}>
                      <Book
                        title={book.title}
                        cover={book.cover}
                        author={book.author}
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
        <button>Add a book</button>
      </div>
    </div>
  );
}

export default booklist;
