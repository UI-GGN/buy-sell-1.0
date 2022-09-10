const username = localStorage.getItem("username");

export const loadProducts = (products) => {
  return {
    type: "LOAD_PRODUCTS",
    payload: products,
  };
};

export const loadCart = (cart) => {
  return {
    type: "LOAD_CART",
    payload: cart[username],
  };
};

export const loadWishlist = (wishlist) => {
  return {
    type: "LOAD_WISHLIST",
    payload: wishlist[username],
  };
};

export const updateCartTotal = (total) => {
  return {
    type: "UPDATE_CART_TOTAL",
    payload: total,
  };
};

export const loadAddresses = (addresses) => {
  return {
    type: "LOAD_ADDRESSES",
    payload: addresses[username],
  };
};
