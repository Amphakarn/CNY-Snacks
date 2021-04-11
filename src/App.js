import React from "react";
import { Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import ProductList from "./components/ProductList";
import ProductListSmallBucket from "./components/ProductListSmallBucket";
import Details from "./components/Details";
import Cart from "./components/Cart";
import Default from "./components/Default";
import Modal from "./components/Modal";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route path='/products' component={ProductList}></Route>
        <Route path='/smallBuckets' component={ProductListSmallBucket}></Route>
        <Route path='/details' component={Details}></Route>
        <Route path='/cart' component={Cart}></Route>
        <Route component={Default} />
      </Switch>
      <Modal />
    </React.Fragment>
  );
}

export default App;
