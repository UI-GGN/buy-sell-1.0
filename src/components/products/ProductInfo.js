import productList from "./ProductList";
import './productInfo.css';
import { useLocation, useSearchParams } from "react-router-dom";
// import queryString from "query-string"

const ProductInfo = (props) => {
const location = useLocation();
const [searchParams, setSearchParams] = useSearchParams();

// console.log(queryString.parse(location.search))
        // let params = (new URL(document.location)).searchParams;
        // const productId = params.get("productId"); 
        const productId = searchParams.get("id");
        const product = productList.filter( product => {
            return product.id === productId
        })[0]

        return(
            <div className="containers">
                <div className="image">
                    <img 
                    src={product.image} 
                    alt={product.product + "image"} 
                    height="400"
                    ></img></div>
                <div className="info">
                <h1>{product.product}</h1>
                {/* <p>{product.id}</p> */}
                <hr/>
                <h2>Rs. {product.price}</h2>
                <p style={{ color: "green", marginTop:"0px" }} >inclusive of all taxes</p>
                <h2>Description:</h2>
                <p style={{ color: "smoke" }}>{product.description}</p>
                <div className="Bottom-box"><h3>Services and Policies</h3>
                <table>
                <tr class="dilevery"><td>
                <div><img className="icon" src="https://img3.urbanic.com/6feec6d2be224096a72a3a0eb3e07bd5" alt=""/><p className="dilevery-option" >Cash on delivery available in most areas</p></div>
                </td></tr>
                <tr><td><div><img className="icon" src="https://img3.urbanic.com/2c9fa5132edb47b0a8bcbfb1c0f6fcbb" alt=""/><p className="dilevery-option"> Free shipping on the selected products! </p></div> 
                 </td></tr>
                <tr><td><div><img className="icon" src="https://img3.urbanic.com/bffae7de707a498c9251a4c9da5c9b24" alt=""/><p className="dilevery-option" >10 days easy returns with free pick up! </p> </div></td></tr>
                </table></div>
                <div>
                <button className="btn btn--primary btn--large m--t--3 col-x24 m--b--3" >Add to Cart</button>
                <button className="btn btn-outline-primary mx-1" >Buy now</button>
                </div>
                </div>
            </div>
        )
}

export default ProductInfo;