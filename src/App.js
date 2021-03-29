import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

import Searchpage from "./searchpage";
import Booklist from "./booklist";

class BooksApp extends React.Component {
  state = {
    booksList: [],
    searchBooksList: [],
    // booksList: [
    //   {
    //     id: "1",
    //     title: "To Kill a Mockingbird",
    //     author: "Harper Lee",
    //     shelf: "Currently Reading",
    //     cover:
    //       "http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api",
    //   },

    //   {
    //     id: "2",
    //     title: "Orson Scott Card",
    //     author: "Ender's Game",
    //     shelf: "Currently Reading",
    //     cover:
    //       "http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api",
    //   },

    //   {
    //     id: "3",
    //     title: "David McCullough",
    //     author: "1776",
    //     shelf: "Want to Read",
    //     cover:
    //       "http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api",
    //   },

    //   {
    //     id: "4",
    //     title: "J.K. Rowling",
    //     author: "Harry Potter and the Sorcerer's Stone",
    //     shelf: "Want to Read",
    //     cover:
    //       "http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api",
    //   },

    //   {
    //     id: "5",
    //     title: "JJ.R.R. Tolkien",
    //     author: "The Hobbit",
    //     shelf: "Read",
    //     cover:
    //       "http://books.google.com/books/content?id=pD6arNyKyi8C&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE70Rw0CCwNZh0SsYpQTkMbvz23npqWeUoJvVbi_gXla2m2ie_ReMWPl0xoU8Quy9fk0Zhb3szmwe8cTe4k7DAbfQ45FEzr9T7Lk0XhVpEPBvwUAztOBJ6Y0QPZylo4VbB7K5iRSk&source=gbs_api",
    //   },

    //   {
    //     id: "6",
    //     title: "Seuss",
    //     author: "Oh, the Places You'll Go!",
    //     shelf: "Read",
    //     cover:
    //       "http://books.google.com/books/content?id=1q_xAwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE712CA0cBYP8VKbEcIVEuFJRdX1k30rjLM29Y-dw_qU1urEZ2cQ42La3Jkw6KmzMmXIoLTr50SWTpw6VOGq1leINsnTdLc_S5a5sn9Hao2t5YT7Ax1RqtQDiPNHIyXP46Rrw3aL8&source=gbs_api",
    //   },

    //   {
    //     id: "7",
    //     title: "Mark Twain",
    //     author: "The Adventures of Tom Sawyer",
    //     shelf: "Read",
    //     cover:
    //       "http://books.google.com/books/content?id=32haAAAAMAAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72yckZ5f5bDFVIf7BGPbjA0KYYtlQ__nWB-hI_YZmZ-fScYwFy4O_fWOcPwf-pgv3pPQNJP_sT5J_xOUciD8WaKmevh1rUR-1jk7g1aCD_KeJaOpjVu0cm_11BBIUXdxbFkVMdi&source=gbs_api",
    //   },
    // ],
  };

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState(
        () => ({
          booksList: books,
        }),
        () => {
          console.log(this.state.booksList);
        }
      );
    });
  }

  changeshelf = (id, event) => {
    const shelf =
      event.target.value === "currentlyReading"
        ? "Currently Reading"
        : event.target.value === "wantToRead"
        ? "Want to Read"
        : event.target.value === "read"
        ? "Read"
        : "None";

    var bookindex = this.state.booksList.findIndex((x) => x.id === id);
    if (bookindex === -1) {
      console.log("error");
    } else
      this.setState({
        booksList: [
          ...this.state.booksList.slice(0, bookindex),
          Object.assign({}, this.state.booksList[bookindex], {
            shelf: shelf,
          }),
          ...this.state.booksList.slice(bookindex + 1),
        ],
      });
  };

  render() {
    return (
      <Router>
        <div className="app">
          <Switch>
            <Route exact path="/">
              <Booklist
                bookslist={this.state.booksList}
                changeshelf={this.changeshelf}
              />
            </Route>
            <Route path="/searchbook">
              <Searchpage
                query={this.state.query}
                searchInputHandler={this.searchInputHandler}
                bookslist={this.state.booksList}
                searchbooks={this.searchbooks}
                searchBooksList={this.state.searchBooksList}
              />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default BooksApp;
