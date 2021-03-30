import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import "./App.css";

import Searchpage from "./searchpage";
import Booklist from "./booklist";

class BooksApp extends React.Component {
  state = {
    query: "",
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

  emptyBookList = () => {
    this.setState(() => ({
      searchBooksList: [],
    }));
  };

  handleClose = () => {
    this.setState({
      query: "",
      searchBooksList: [],
    });
  };

  searchInputHandler = (event) => {
    this.setState(
      {
        query: event.target.value,
        searchBooksList: [],
      },
      () => {
        const booksListID = new Set(this.state.booksList.map(({ id }) => id));
        console.log(booksListID);
        this.state.query.length > 0
          ? BooksAPI.search(this.state.query).then((books) => {
              books.length > 1
                ? this.setState(
                    () => ({
                      searchBooksList: [
                        ...books.filter(({ id }) => !booksListID.has(id)),
                      ],
                    }),
                    () => {
                      this.state.query.length === 0 && this.emptyBookList();
                    }
                  )
                : this.emptyBookList();
            })
          : this.emptyBookList();
      }
    );
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
                changeshelf={this.changeshelf}
                handleClose={this.handleClose}
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
