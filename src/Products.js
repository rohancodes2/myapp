import React, { Component } from "react";

function Products(props) {
  return (
    <div>
      <h1>{props.id}</h1>
      <p>{props.name}</p>
      <p>{props.quantity}</p>
      <p>{props.price}</p>
    </div>
  );
}
export default Products;
