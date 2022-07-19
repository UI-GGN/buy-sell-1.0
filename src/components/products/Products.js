import React, { useState } from "react";
import productList from "./ProductList";
import './styles/productStyles.css';
import InfoDialog from "../dialog/InfoDialog";

const Products = () => {
    const [showDialog, setShowDialog] = useState(false);

    return(
        <>
            <section className="product-grid">
                {
                    productList.map((productItem) => {
                        return(
                            <div className="product-card" onClick={()=>{setShowDialog(true);}}>
                                <img src={productItem.image} alt={productItem.product + "image"}></img>
                                <h3>{productItem.product}</h3>
                                <p>{"Rs. " + productItem.price}</p>
                            </div>
                        )
                    })
                }
            </section>
            {showDialog && <InfoDialog isLoggedIn={false} setShowDialog={setShowDialog}/>}
        </>
    )
}

export default Products;