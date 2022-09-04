const products = JSON.parse(localStorage.getItem("products"));
const cart = JSON.parse(localStorage.getItem("cart"));
const wishlist = JSON.parse(localStorage.getItem("wishlist"));
const username = JSON.parse(localStorage.getItem("username"));

export const loadProducts = () => {
  return {
    type: "LOAD_PRODUCTS",
    payload: products,
  };
};

export const loadCart = () => {
  return {
    type: "LOAD_CART",
    payload: cart[username],
  };
};

export const loadWishlist = () => {
  return {
    type: "LOAD_WISHLIST",
    payload: wishlist[username],
  };
};
