import React, { useState, useEffect } from "react";
import productList from "../products/ProductList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import "./cart.css";

const Cart = () => {
  const username = localStorage.getItem("username");
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem("cart")));
  const [total, setTotal] = useState(0);

  const products = productList.filter((product) => {
    return cart[username]["items"].includes(product.id);
  });

  useEffect(() => {
    calculateTotalCost();
  });

  const removeFromCart = (productId) => {
    let updatedCart = { ...cart };
    const index = updatedCart[username]["items"].indexOf(productId);
    updatedCart[username]["items"].splice(index, 1);
    delete updatedCart[username]["count"][productId];

    setCart(updatedCart);
    calculateTotalCost();
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    toast.info("Item has been removed from the Cart");
  };

  const updateItemQuantity = (productId, operation) => {
    let updatedCart = { ...cart };
    updatedCart[username]["count"][productId] === 1 &&
      operation === "decrement" &&
      removeFromCart(productId);
    operation === "increment"
      ? (updatedCart[username]["count"][productId] += 1)
      : (updatedCart[username]["count"][productId] -= 1);

    setCart(updatedCart);
    calculateTotalCost();
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotalCost = () => {
    let totalCost = 0;
    for (var item of products) {
      totalCost += parseInt(item.price) * cart[username]["count"][item.id];
    }
    setTotal(totalCost);
  };

  return (
    <section className="stack">
      <h2>Your Cart</h2>
      {products.length === 0 ? (
        <div className="empty-container">
          <ProductionQuantityLimitsIcon className="empty-icon" />
          <p>Your cart is empty. Add items to checkout.</p>
        </div>
      ) : (
        <div>
          {products.map((product, index) => {
            return (
              <div className="cart-item-container" key={index}>
                <div className="cart-item" key={index}>
                  <img
                    className="cart-image"
                    src={product.image}
                    alt={product.product + " image"}
                  ></img>
                  <div>
                    <h3 className="cart-product-title">{product.product}</h3>
                    <h5 className="quantity-title">Quantity</h5>
                    <div className="cart-item-quantity-container">
                      <button
                        className="button cart-qty-button"
                        onClick={() =>
                          updateItemQuantity(product.id, "decrement")
                        }
                      >
                        -
                      </button>
                      <p className="cart-item-quantity">
                        {cart[username]["count"][product.id]}
                      </p>
                      {/* <input
                                                className="cart-item-quantity"
                                                defaultValue={cart[username]["count"][product.id]}
                                                >
                                                </input> */}
                      <button
                        className="button cart-qty-button"
                        onClick={() =>
                          updateItemQuantity(product.id, "increment")
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className=" button cart-remove-button"
                      onClick={() => removeFromCart(product.id)}
                    >
                      Remove
                    </button>
                  </div>
                  <h3 className="cart-item-price">{"Rs. " + product.price}</h3>
                </div>
              </div>
            );
          })}
          <div className="total-cost-container">
            <h3>Total Cost : Rs. {total}</h3>
            <button className="button checkout-button">
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
      <ToastContainer
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        theme="dark"
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default Cart;
