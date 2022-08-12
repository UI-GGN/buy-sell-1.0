import productList from "./ProductList";
import './productInfo.css';
import { useSearchParams } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProductInfo = (props) => {
    const [searchParams] = useSearchParams();
    const username = localStorage.getItem("username");
    const cart = JSON.parse(localStorage.getItem("cart"));
    const productId = searchParams.get("id");

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

    const product = productList.filter( product => {
        return product.id === productId
    })[0]

    return(
        <div className="product-info">
            <div className="image">
                <img
                src={product.image} 
                alt={product.product + "image"} 
                height="400"
                >
                </img>
            </div>
            <div className="info">
                <h1>{product.product}</h1>
                
                <hr/>
                <h2>Rs. {product.price}</h2>
                <p style={{ color: "green", marginTop:"0px" }} >inclusive of all taxes</p>

                <h2>Description:</h2>
                <p style={{ color: "smoke" }}>{product.description}</p>

                <div className="Bottom-box"><h3>Services and Policies</h3>
                    <table>
                    <tr class="delivery">
                        <td>
                            <div>
                                <img className="icon" src="https://img3.urbanic.com/6feec6d2be224096a72a3a0eb3e07bd5" alt=""/>
                                <p className="delivery-option">Cash on delivery available in most areas</p>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <img className="icon" src="https://img3.urbanic.com/2c9fa5132edb47b0a8bcbfb1c0f6fcbb" alt=""/>
                                <p className="delivery-option">Free shipping on the selected products!</p>
                            </div> 
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div>
                                <img className="icon" src="https://img3.urbanic.com/bffae7de707a498c9251a4c9da5c9b24" alt=""/>
                                <p className="delivery-option">10 days easy returns with free pick up!</p>
                            </div>
                        </td>
                    </tr>
                    </table>
                </div>
                <div className="productinfo-button-container">
                    <button 
                    className="button product-page-button"
                    onClick={() => {addToCart(product.id)}}
                    >
                        Add to Cart
                    </button>
                    <button
                    className="button product-page-button buy-now-button"
                    >
                        Buy Now
                    </button>
                </div>
            </div>

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
        </div>
    )
}

export default ProductInfo;