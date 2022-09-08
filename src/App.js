import React from "react";
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import { Database, Wishlist, Cart } from "./mocks/Database";
import { useDispatch } from "react-redux";
import {
  loadProducts,
  loadWishlist,
  loadCart,
} from "./reducers/actionCreators";
import useAuth from "./customHooks/useAuth";
import productList from "./components/products/ProductList";
import RootRouter from "./components/router/Router";

function App() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useAuth();

  localStorage.getItem("database") === null &&
    localStorage.setItem("database", JSON.stringify(Database));
  localStorage.getItem("wishlist") === null &&
    localStorage.setItem("wishlist", JSON.stringify(Wishlist));
  localStorage.getItem("cart") === null &&
    localStorage.setItem("cart", JSON.stringify(Cart));
  localStorage.getItem("products") === null &&
    localStorage.setItem("products", JSON.stringify(productList));

  const products = JSON.parse(localStorage.getItem("products"));
  dispatch(loadProducts(products));
  if (isAuthenticated) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const wishlist = JSON.parse(localStorage.getItem("wishlist"));
    dispatch(loadWishlist(wishlist));
    dispatch(loadCart(cart));
  }

  return (
    <BrowserRouter>
      <RootRouter />
    </BrowserRouter>
  );
}

export default App;
