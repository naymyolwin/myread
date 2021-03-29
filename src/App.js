import React from "react";
// import * as BooksAPI from './BooksAPI'
import "./App.css";

import Searchpage from "./searchpage";
import Booklist from "./booklist";

class BooksApp extends React.Component {
  state = {
    booksList: [
      {
        id: "",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        shelf: "Currently Reading",
        cover:
          "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
      },
      {
        id: "",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        shelf: "Want to Read",
        cover:
          "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
      },
      {
        id: "",
        title: "To Kill a Mockingbird",
        author: "Harper Lee",
        shelf: "Read",
        cover:
          "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
      },
    ],
    showSearchPage: false,
  };

  render() {
    return (
      <div className="app">
        {this.state.showSearchPage ? <Searchpage /> : <Booklist />}
      </div>
    );
  }
}

export default BooksApp;
