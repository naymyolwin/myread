import React from "react";

function book(props) {
  const image = "imageLinks" in props.book;
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={
            props.book.imageLinks !== null
              ? {
                  width: 128,
                  height: 193,
                  backgroundImage: image
                    ? `url(${props.book.imageLinks.thumbnail})`
                    : null,
                }
              : {
                  width: 128,
                  height: 193,
                }
          }
        ></div>
        <div className="book-shelf-changer">
          <select
            defaultValue={props.shelf}
            onChange={(e) => {
              return props.changeshelf(props.book, e);
            }}
          >
            <option value="move" disabled>
              Move to...
            </option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors}</div>
    </div>
  );
}

export default book;
