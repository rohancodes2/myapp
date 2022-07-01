import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Products from "./Products";

function App() {
  const counter = [
    {
      Id: "1",
      ProductName: "Laptop",
      Quantity: "233",
      Price: "1000",
    },
    {
      Id: "2",
      ProductName: "Mouse",
      Quantity: "233",
      Price: "1000",
    },
    {
      Id: "3",
      ProductName: "Keyboard",
      Quantity: "233",
      Price: "100",
    },
    {
      Id: "4",
      ProductName: "Tablet",
      Quantity: "233",
      Price: "100",
    },
  ];

  const productlist = counter.map((prod) => {
    return (
      <Products
        key={prod.Id}
        id={prod.Id}
        name={prod.ProductName}
        quantity={prod.Quantity}
        price={prod.Price}
      />
    );
  });

  console.log(productlist);
  return <div>{productlist}</div>;
}

export default App;
