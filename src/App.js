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
  };

  reloadBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState(() => ({
        booksList: books,
      }));
    });
  };

  componentDidMount() {
    this.reloadBooks();
  }

  changeshelf = (book, event) => {
    const shelf = event.target.value;

    BooksAPI.update(book, shelf).then(() => {
      this.reloadBooks();
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
