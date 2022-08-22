import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Database, Wishlist, Cart } from "./mocks/Database";
import RootRouter from "./components/router/Router";

function App() {
  localStorage.getItem("database") === null &&
    localStorage.setItem("database", JSON.stringify(Database));
  localStorage.getItem("wishlist") === null &&
    localStorage.setItem("wishlist", JSON.stringify(Wishlist));
  localStorage.getItem("cart") === null &&
    localStorage.setItem("cart", JSON.stringify(Cart));

  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
}

export default App;
