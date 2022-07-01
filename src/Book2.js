import React, { Component } from "react";

function Book2(props) {
  return (
    <ul class="list-group">
      <li class="list-group-item">
        <input
          type="checkbox"
          value={props.id}
          onChange={props.onChange}
        ></input>{" "}
        {props.name}
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
export default Book2;
