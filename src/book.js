import React from "react";

function book(props) {
  return (
    <div className="book">
      <div className="book-top">
        <div
          className="book-cover"
          style={{
            width: 128,
            height: 193,
            backgroundImage: `url(${props.thumbnail})`,
          }}
        ></div>
        <div className="book-shelf-changer">
          <select
            defaultValue={props.shelf}
            onChange={(e) => {
              return props.changeshelf(props.book, e);
              //return props.changeshelf(props.id, e);
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
      <div className="book-title">{props.title}</div>
      <div className="book-authors">{props.authors}</div>
    </div>
  );
}

export default book;
