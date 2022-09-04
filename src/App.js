import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Database, Wishlist, Cart } from "./mocks/Database";
import { useDispatch } from "react-redux";
import { loadProducts } from "./reducers/actionCreators";
import productList from "./components/products/ProductList";
import RootRouter from "./components/router/Router";

function App() {
  const dispatch = useDispatch();

  localStorage.getItem("database") === null &&
    localStorage.setItem("database", JSON.stringify(Database));
  localStorage.getItem("wishlist") === null &&
    localStorage.setItem("wishlist", JSON.stringify(Wishlist));
  localStorage.getItem("cart") === null &&
    localStorage.setItem("cart", JSON.stringify(Cart));
  localStorage.getItem("products") === null &&
    localStorage.setItem("products", JSON.stringify(productList));

  dispatch(loadProducts());

  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
}

export default App;
