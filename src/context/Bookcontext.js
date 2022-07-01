import React, { Component, useState, createContext, useEffect } from "react";

export const BookContext = createContext();
class BookContextProvider extends Component {
  state = {
    books: [],
  };

  updateLocalData = () => {
    console.log(this.state.books);
    let localdata = localStorage.getItem("books");
    let data = JSON.parse(localdata);
    if (data === null) {
      localStorage.setItem("books", JSON.stringify(this.state.books));
    } else {
      data = data.concat(this.state.books);
      localStorage.setItem("books", JSON.stringify(data));
      alert("Data successfully added");
    }
  };
  getlocaldata = () => {
    const localdata = JSON.parse(localStorage.getItem("books"));
    if (localdata === null) {
      return [];
    }
    return localdata;
  };
  render() {
    return (
      <BookContext.Provider
        value={{
          ...this.state,
          updateLocalData: this.updateLocalData,
          getlocaldata: this.getlocaldata,
        }}
      >
        {this.props.children}
      </BookContext.Provider>
    );
  }
}

export default BookContextProvider;
