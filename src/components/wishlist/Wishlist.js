import React, {useState} from "react";
import productList from "../products/ProductList";
import HeartBrokenIcon from '@mui/icons-material/HeartBroken';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./wishlist.css";

const Wishlist = () => {
    const username = localStorage.getItem("username");
    const [wishlist, setWishlist] = useState(JSON.parse(localStorage.getItem("wishlist")) || "");
    const cart = JSON.parse(localStorage.getItem("cart"));

    const products = productList.filter( product => {
        return wishlist[username].includes(product.id)
    })

    const removeFromWislist = (productId) => {
        let updatedWishlist = {...wishlist};
        let index = updatedWishlist[username].indexOf(productId);
        if (index > -1) updatedWishlist[username].splice(index, 1);
        setWishlist(updatedWishlist);
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        toast.info("Item has been removed from the Wishlist");
    }

    const addToCart = (productId) => {
        if(cart[username]["items"].includes(productId)) {
            cart[username]["count"][productId] += 1
        }
        else {
            cart[username]["items"].push(productId);
            cart[username]["count"][productId] = 1;
        }
         
        localStorage.setItem("cart", JSON.stringify(cart));
        toast.info("Item has been added to the Cart");
    }

    return(
        <section className="stack">
            <h2>Your Wishlist</h2>
            {products.length === 0 ? (
                <div className="empty-container">
                <HeartBrokenIcon className="empty-icon"/>
                <p>Your wishlist is empty. Start adding items.</p>
            </div>
            ) : (
                products.map((product, index) => {
                    return(
                        <div className="wishlist-item-container">
                            <div className="wishlist-item" key={index}>
                                <img
                                className="wishlist-image"
                                src={product.image}
                                alt={product.product + "image"}>
                                </img>
                                <h4>{product.product}</h4>
                                <p>{"Rs. " + product.price}</p>
                            </div>
                            <div className="wishlist-button-section">
                                <button 
                                className="button"
                                onClick={() => addToCart(product.id)}
                                >
                                    Add to cart
                                </button>
                                <button 
                                className="button remove-button"
                                onClick={() => removeFromWislist(product.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    )
                })
            
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
    )
}

export default Wishlist;