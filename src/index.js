import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { ProductProvider } from "./context/products";
import { CartProvider } from "./context/cart";
import { UserProvider } from "./context/user";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <UserProvider>
      <CartProvider>
        <ProductProvider>
          <Router>
            <App />
          </Router>
        </ProductProvider>
      </CartProvider>
    </UserProvider>
  </React.StrictMode>,
  rootElement
);
