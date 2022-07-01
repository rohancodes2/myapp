import React, { Component } from "react";
import Book from "./Book.js";
import { location } from "react-router-dom";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.location.state.id.id,
      title: props.location.state.id.name,
      Author: props.location.state.id.author,
      ISBN: props.location.state.id.isbn,
      PDate: props.location.state.id.pdate,
      Publisher: props.location.state.id.publisher,
      Price: props.location.state.id.price,
      Genre: props.location.state.id.genre,
      Format: props.location.state.id.format,
      books: [],
    };
  }
  handlesubmit = (e) => {
    e.preventDefault();
    let localdata = JSON.parse(localStorage.getItem("books"));

    let index = localdata.indexOf(this.state.id);
    this.state.books.push();
    let id = this.state.id;
    index = localdata.filter((book) => {
      return book.props.id !== id;
    });
    index.push(
      <Book
        key={this.state.id}
        id={this.state.id}
        name={this.state.title}
        isbn={this.state.ISBN}
        author={this.state.Author}
        price={this.state.Price}
        publisher={this.state.Publisher}
        pdate={this.state.PDate}
        genre={this.state.Genre}
        format={this.state.Format}
      />
    );
    console.log(index);
    localStorage.setItem("books", JSON.stringify(index));
  };
  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };
  render() {
    return (
      <div class="search-container">
        <h1>Update the required data</h1>
        <form onSubmit={this.handlesubmit} class="form-group">
          <label for="email">Title:</label>
          <input
            type="text"
            class="form-control"
            name="title"
            onChange={this.handleChange}
            defaultValue={this.state.title}
          />

          <label for="pwd">Author:</label>
          <input
            name="Author"
            type="text"
            class="form-control"
            onChange={this.handleChange}
            defaultValue={this.state.Author}
          />
          <label for="pwd">ISBN:</label>
          <input
            type="number"
            class="form-control"
            name="ISBN"
            onChange={this.handleChange}
            defaultValue={this.state.ISBN}
          />
          <label for="pwd">Publisher:</label>
          <input
            type="text"
            class="form-control"
            name="Publisher"
            onChange={this.handleChange}
            defaultValue={this.state.Publisher}
          />
          <label for="pwd">Publication Date</label>
          <input
            type="date"
            name="PDate"
            class="form-control"
            onChange={this.handleChange}
            defaultValue={this.state.PDate}
          />

          <label for="pwd">Price:</label>
          <input
            type="number"
            class="form-control"
            name="Price"
            onChange={this.handleChange}
            defaultValue={this.state.Price}
          />
          <label for="pwd">Genre:</label>
          <select
            defaultChecked={this.state.Genre}
            onChange={this.handleChange}
            name="Genre"
            class="form-control"
          >
            <option value="Fantasy">Fantasy</option>
            <option value="Mystery">Mystery</option>
            <option value="Novel">Novel</option>
            <option value="Fiction">Fiction</option>
          </select>
          <label for="pwd">Format:</label>
          <select
            defaultChecked={this.state.Format}
            onChange={this.handleChange}
            name="Format"
            class="form-control"
          >
            <option value="Mobi">Mobi</option>
            <option value="Ebup">EBup</option>
            <option value="Pdf">Pdf</option>
          </select>
          <div class="container-fluid">
            <button
              style={{ margin: 10 }}
              type="submit"
              class="btn btn-primary "
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default Home;
