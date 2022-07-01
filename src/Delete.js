import React, { Component } from "react";
import { findAllByDisplayValue } from "@testing-library/react";
import { BookContext } from "./context/Bookcontext";
import Book from "./Book.js";
import Book2 from "./Book2.js";
class Delete extends Component {
  static contextType = BookContext;
  constructor(props) {
    super(props);
    this.state = {
      origitem: [],
      items: [],
      item: [],
    };
  }

  componentDidMount() {
    let addbooks = this.context.getlocaldata().map((book, index) => {
      return (
        <Book
          key={book.key}
          id={book.props.id}
          name={book.props.name}
          author={book.props.author}
          price={book.props.price}
          isbn={book.props.isbn}
          publisher={book.props.publisher}
          pdate={book.props.pdate}
          genre={book.props.genre}
          format={book.props.format}
        />
      );
    });

    let showcase = this.context.getlocaldata().map((book, index) => {
      return (
        <Book2
          key={book.key}
          id={book.props.id}
          name={book.props.name}
          author={book.props.author}
          onChange={this.handlechange}
        />
      );
    });

    this.setState({ origitem: addbooks, items: showcase });
  }
  handlechange = (e) => {
    if (e.target.checked) {
      this.state.item.push(e.target.value);
    } else {
      let itemss = this.state.item.filter((i) => {
        return i !== e.target.value;
      });
      this.setState({ item: itemss });
    }
  };
  handleclick = (e) => {
    e.preventDefault();
    let finalitems = this.state.origitem.filter((book) => {
      return this.state.item.indexOf(String(book.props.id)) === -1;
    });
    let show = this.state.items.filter((i) => {
      return this.state.item.indexOf(String(i.props.id)) === -1;
    });
    this.setState({ items: show });
    localStorage.setItem("books", JSON.stringify(finalitems));
    alert("DELETED SUCCESSFULLY");
    this.forceUpdate();
  };
  render() {
    return (
      <div class="container">
        <div>
          <button
            class="btn btn-danger "
            onClick={this.handleclick}
            style={{ float: "right" }}
          >
            Delete items
          </button>
        </div>

        {this.state.items}
      </div>
    );
  }
}

export default Delete;
