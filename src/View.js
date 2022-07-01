import React, { Component } from "react";
import "./View.css";
import Book from "./Book.js";
import { BookContext } from "./context/Bookcontext";
class Viewdata extends Component {
  static contextType = BookContext;
  state = {
    buttonpressed: false,
    search: "",
    books: [],
    filteredBooks: [],
  };

  setcount = () => {
    this.setState({ count: 3 });
  };
  componentDidMount() {
    if (this.context.getlocaldata().length === 0) {
      console.log("hi");
      let url = "http://localhost:3000/books";
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          let books = data.map((book, index) => {
            return (
              <Book
                key={index}
                id={index}
                name={book.title}
                author={book.Author}
                price={book.Price}
                isbn={book.ISBN}
                publisher={book.Publisher}
                pdate={book.PublicationDate}
                genre={book.Genre}
                format={book.Format}
              />
            );
          });
          console.log(books);
          localStorage.setItem("books", JSON.stringify(books));
          this.setState({ books: books, filteredBooks: books });
        });
    }

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

    console.log(addbooks);
    this.setState({ books: addbooks, filteredBooks: addbooks });
  }

  handleClick = () => {
    let { search } = this.state;
    console.log(this.state.filteredBooks);
    if (search !== "") {
      this.state.filteredBooks = this.state.books.filter((book) => {
        return (
          book.props.name
            .toLowerCase()
            .indexOf(this.state.search.toLowerCase().trim()) !== -1
        );
      });
    }
    this.forceUpdate();
    console.log(this.state.filteredBooks);
  };

  onChange = (event) => {
    this.setState({ search: event.target.value });
    console.log("Change recorded");
    console.log(event.target.value);
    if (event.target.value === "") {
      console.log("resetting the books");
      this.setState({ filteredBooks: this.state.books });
    }
  };

  render() {
    console.log("called");
    return (
      <div class="search-container">
        <div>
          {" "}
          <input
            id="inn"
            onChange={this.onChange}
            type="text"
            placeholder="Search.."
          ></input>
          <button class="btn btn-success " onClick={this.handleClick}>
            Search
          </button>
        </div>

        <div class="container">
          {/* <table border="1" class="table">
            <thead class="thead-dark">
              <tr>
                <th>Title</th>
                <th>Author</th>
                <th>Price</th>
                <th>Options </th>
              </tr>
            </thead> */}

          {this.state.filteredBooks}
          {/* /  </table> */}
        </div>
      </div>
    );
  }
}

export default Viewdata;
