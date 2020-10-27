import React from "react";
import { Route, Switch } from "react-router-dom";
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  Login,
  Products,
  SingleProducts
} from "./pages";
import { Navbar } from "./components/Navbar";
export default function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route exact path="/products">
          <Products />
        </Route>
        <Route path="/products/:id">
          <SingleProducts />
        </Route>
        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </>
  );
}
