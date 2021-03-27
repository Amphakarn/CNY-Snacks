import React, { Component } from "react";
import logo from "./logo.svg";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <ProductList />
      <Details></Details>
      <Cart></Cart>
      <Default></Default>
    </React.Fragment>
  );
}

export default App;
