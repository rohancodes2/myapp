import React, { Component } from "react";
import { useHistory } from "react-router-dom";
function Book(props) {
  let history = useHistory();

  function buttonclicked() {
    history.push("/home", { id: props });
  }

  function onclick() {
    history.push("/delete", { id: props });
  }

  return (
    <ul class="list-group">
      <li class="list-group-item">
        <h3>{props.name}</h3> <p id="asd">Author-{props.author}</p>
        <p id="asd">ISBN-{props.isbn}</p>
        <p id="asd">Publisher-{props.publisher}</p>
        <p id="asd">Publication date-{props.pdate}</p>
        <p id="asd">Genre-{props.genre}</p>
        <p id="asd">Format-{props.format}</p>
        <button
          class="btn btn-info "
          onClick={buttonclicked}
          style={{ float: "right" }}
        >
          Update{" "}
        </button>
        <button
          class="btn btn-danger "
          onClick={onclick}
          style={{ float: "right" }}
        >
          Delete{" "}
        </button>
      </li>
    </ul>

    // <tbody>
    //   <tr>
    //     <td>{props.name} </td>
    //     <td>{props.author} </td>
    //     <td> {props.price}</td>
    //     <td>
    //       <button style={{ margin: 5 }}>Update</button>
    //       <button style={{ margin: 5 }}>Delete</button>
    //     </td>
    //   </tr>
    // </tbody>
  );
}
export default Book;
