import React, { Component } from "react";
import App from "./App.js";
import Add from "./Add.js";
import Home from "./Home.js";
import View from "./View.js";
import Delete from "./Delete.js";
import BookContextProvider from "./context/Bookcontext";
import "./TopPage.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Link,
} from "react-router-dom";
import Login from "./Login.js";
class TopBar extends Component {
  render() {
    return (
      <Router>
        <div class="topnav">
          <h1 style={{ color: "white" }}>Product Inventory Management</h1>
          <nav style={{ margin: 10 }}>
            <NavLink
              to="/"
              exact
              style={{ padding: 10 }}
              activeClassName="active"
            >
              View Books
            </NavLink>

            <NavLink
              to="/add"
              exact
              style={{ padding: 10 }}
              activeClassName="active"
            >
              Add Books
            </NavLink>

            <NavLink
              to="/delete"
              style={{ padding: 10 }}
              exact
              activeClassName="active"
            >
              Delete Books
            </NavLink>
          </nav>
        </div>
        <Route path="/add" exact>
          <BookContextProvider>
            <Add />
          </BookContextProvider>
        </Route>
        <Route path="/" exact>
          <BookContextProvider>
            <View />
          </BookContextProvider>
        </Route>

        <Route path="/delete" exact>
          <BookContextProvider>
            <Delete />
          </BookContextProvider>
        </Route>
      

        <Route path="/home" exact component={Home} />
      </Router>
    );
  }
}

export default TopBar;
