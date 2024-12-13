import React from "react";
import ReactDOM from "react-dom";
import { CartProvider } from "./Pages/Context/context";
import App from "./App";

ReactDOM.render(
  <CartProvider>
    <App />
  </CartProvider>,
  document.getElementById("root")
);
