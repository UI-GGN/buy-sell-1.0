import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  updateItemQuantity,
  removeFromCart,
  calculateTotalCost,
} from "../../services/cartService";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ProductionQuantityLimitsIcon from "@mui/icons-material/ProductionQuantityLimits";
import "./cart.css";

const Cart = () => {
  const cart = useSelector((state) => state.cartReducer.cart);
  const cartTotal = useSelector((state) => state.cartReducer.cartTotal);
  const productList = useSelector(
    (state) => state.productReducer.products.byId
  );
  let products = [];

  products = Object.keys(productList)
    .filter((key) => Object.keys(cart).includes(key))
    .reduce((obj, key) => {
      obj[key] = productList[key];
      return obj;
    }, {});

  useEffect(() => {
    calculateTotalCost();
  }, []);

  return (
    <section className="stack">
      <h2>Your Cart</h2>
      {Object.entries(products).length === 0 ? (
        <div className="empty-container">
          <ProductionQuantityLimitsIcon className="empty-icon" />
          <p>Your cart is empty. Add items to checkout.</p>
        </div>
      ) : (
        <div>
          {Object.entries(products).map((product, index) => {
            return (
              <div className="cart-item-container" key={index}>
                <div className="cart-item" key={index}>
                  <img
                    className="cart-image"
                    src={product[1].image}
                    alt={product[1].name + " image"}
                  ></img>
                  <div>
                    <h3 className="cart-product-title">{product[1].name}</h3>
                    <h5 className="quantity-title">Quantity</h5>
                    <div className="cart-item-quantity-container">
                      <button
                        className="button cart-qty-button"
                        onClick={() =>
                          updateItemQuantity(product[1].id, "decrement")
                        }
                      >
                        -
                      </button>
                      <p className="cart-item-quantity">
                        {cart[product[1].id]}
                      </p>
                      {/* <input
                                                className="cart-item-quantity"
                                                defaultValue={cart[username]["count"][product.id]}
                                                >
                                                </input> */}
                      <button
                        className="button cart-qty-button"
                        onClick={() =>
                          updateItemQuantity(product[1].id, "increment")
                        }
                      >
                        +
                      </button>
                    </div>
                    <button
                      className=" button cart-remove-button"
                      onClick={() => removeFromCart(product[1].id)}
                    >
                      Remove
                    </button>
                  </div>
                  <h3 className="cart-item-price">
                    {"Rs. " + product[1].price}
                  </h3>
                </div>
              </div>
            );
          })}
          <div className="total-cost-container">
            <h3>Total Cost : Rs. {cartTotal}</h3>
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
