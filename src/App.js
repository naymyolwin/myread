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
        //    const booksListID = new Set(this.state.booksList.map(({ id }) => id));
        this.state.query.length > 0
          ? BooksAPI.search(this.state.query).then((books) => {
              console.log(books.length);
              books.length > 1
                ? this.setState(
                    () => ({
                      //======== Remove from the search list if book is already in shelf
                      // searchBooksList: [
                      //   ...books.filter(({ id }) => !booksListID.has(id)),
                      // ],
                      //========
                      //======== Update search list with the shelf if alread added.

                      searchBooksList: books.map((t1) => ({
                        ...t1,
                        ...this.state.booksList.find((t2) => t2.id === t1.id),
                      })),
                      //========
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
      <Router basename={process.env.PUBLIC_URL}>
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
