import React, { Component, useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { BookContext } from "./context/Bookcontext";
import uuid from "uuid/v1";
import Home from "./Home";
import Book from "./Book";

class Add extends Component {
  static contextType = BookContext;
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      Author: "",
      ISBN: "",
      PDate: "",
      Publisher: "",
      Price: "",
      Genre: "",
      Format: "",
    };
  }
  buttonclicked = () => {
    let history = useHistory();
    history.push("/home");
  };

  handlesubmit = (e) => {
    e.preventDefault();
    const {
      title,
      Author,
      ISBN,
      PDate,
      Publisher,
      Price,
      Genre,
      Format,
    } = this.state;

    if (
      title === "" ||
      Author === "" ||
      ISBN === "" ||
      PDate === "" ||
      Publisher === "" ||
      Price === "" ||
      Genre === "" ||
      Format === ""
    ) {
      alert("Please enter all the values");
    } else {
      this.context.books.pop();
      this.context.books.push(
        <Book
          key={uuid()}
          id={uuid()}
          name={title}
          author={Author}
          isbn={ISBN}
          price={Price}
          publisher={Publisher}
          pdate={PDate}
          genre={Genre}
          format={Format}
        />
      );
      this.context.updateLocalData();
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    console.log(event.target.value);
  };
  render() {
    return (
      <div class="search-container">
        <form onSubmit={this.handlesubmit} class="form-group">
          <label for="email">Title:</label>
          <input
            ref="title"
            type="text"
            class="form-control"
            name="title"
            placeholder="Enter Title"
            onChange={this.handleChange}
          />

          <label for="pwd">Author:</label>
          <input
            ref="Author"
            type="text"
            name="Author"
            class="form-control"
            placeholder="Enter Author's name"
            onChange={this.handleChange}
          />
          <label for="pwd">ISBN:</label>
          <input
            ref="isbn"
            type="number"
            name="ISBN"
            class="form-control"
            placeholder="Enter ISBN No."
            onChange={this.handleChange}
          />
          <label for="pwd">Publication Date</label>
          <input
            ref="isbn"
            type="date"
            name="PDate"
            class="form-control"
            placeholder="Enter date"
            onChange={this.handleChange}
          />

          <label for="pwd">Publisher:</label>
          <input
            ref="Author"
            type="text"
            name="Publisher"
            class="form-control"
            placeholder="Enter Author's name"
            onChange={this.handleChange}
          />
          <label for="pwd">Price:</label>
          <input
            ref="price"
            type="number"
            name="Price"
            class="form-control"
            placeholder="Enter Book's Price"
            onChange={this.handleChange}
          />

          <label for="pwd">Genre:</label>
          <select
            name="Genre"
            onChange={this.handleChange}
            ref="genre"
            class="form-control"
          >
            <option value="Fantasy">Fantasy</option>
            <option value="Mystery">Mystery</option>
            <option value="Novel">Novel</option>
            <option value="Fiction">Fiction</option>
          </select>
          <label ref="format" for="pwd">
            Format:
          </label>
          <select
            name="Format"
            onChange={this.handleChange}
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

export default Add;
