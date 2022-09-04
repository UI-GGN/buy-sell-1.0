import React, { useEffect, useState } from "react";
import "./product.css";
import * as JsSearch from "js-search";
import { useSelector } from "react-redux";
import productList from "./ProductList";
import useInfiniteScroll from "../../customHooks/useInfiniteScroll";
import BackToTop from "react-back-to-top-button";
import InfoDialog from "../dialog/infoDialog/InfoDialog";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const Products = ({ isAuthenticated, searchQuery, setSearchQuery }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [products, setProducts] = useState(
    useSelector((state) => state.products)
  );
  console.log(products);
  const [isLoading, setIsLoading] = useInfiniteScroll(loadMoreProducts);
  const username = localStorage.getItem("username") || "";
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || ""
  );
  let params = new URL(document.location).searchParams;
  const navigate = useNavigate();
  const onProductClick = (productId) => {
    isAuthenticated
      ? navigate("/products/product?id=" + productId)
      : setShowDialog(true);
  };

  let items = new JsSearch.Search("product");
  items.addIndex("product");
  items.addIndex("tags");
  items.addDocuments(productList);

  function loadMoreProducts() {
    setTimeout(() => {
      setProducts((prevState) => [...prevState, ...products]);
      setIsLoading(false);
    }, 1000);
  }

  useEffect(() => {
    setSearchQuery(params.get("s") || "");
  });

  useEffect(() => {
    searchQuery !== ""
      ? setProducts(items.search(searchQuery))
      : setProducts(productList);
  }, [searchQuery]);

  const updateWishlist = (product) => {
    let updatedWishlist = { ...wishlist };
    let addProduct = true;
    updatedWishlist[username].forEach((item, index) => {
      if (item === product) {
        updatedWishlist[username].splice(index, 1);
        addProduct = false;
      }
    });
    if (addProduct) updatedWishlist[username].push(product);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="product-container">
      {searchQuery !== "" && <h2 className="results-title">Results</h2>}
      <section className="product-grid">
        {products &&
          products.map((productItem, index) => {
            return (
              <div className="product-card" key={index}>
                {console.log(productItem.id)}
                <img
                  src={productItem.image}
                  alt={productItem.name + " image"}
                  className="product-image product-link"
                  onClick={() => {
                    onProductClick(productItem.id);
                  }}
                ></img>
                <hr />
                <div className="product-info-container">
                  <div>
                    <h3
                      className="product-link"
                      onClick={() => {
                        onProductClick(productItem.id);
                      }}
                    >
                      {productItem.name}
                    </h3>
                    <p>{"Rs. " + productItem.price}</p>
                  </div>
                  {isAuthenticated &&
                  wishlist[username].includes(productItem.id) ? (
                    <FavoriteIcon
                      className="fav-icon"
                      style={{ color: "red" }}
                      onClick={() => updateWishlist(productItem.id)}
                    />
                  ) : (
                    <FavoriteBorderIcon
                      className="fav-icon"
                      onClick={() => updateWishlist(productItem.id)}
                    />
                  )}
                </div>
              </div>
            );
          })}
      </section>
      {isLoading && (
        <div className="loading-container">
          <div className="loading"></div>
        </div>
      )}
      {showDialog && !isAuthenticated && (
        <InfoDialog isLoggedIn={false} setShowDialog={setShowDialog} />
      )}
      <BackToTop
        showOnScrollUP
        showAt={500}
        speed={3000}
        easing="easeInOutQuint"
      >
        <button className="back-to-top-button">
          <ArrowUpwardIcon />
        </button>
      </BackToTop>
    </div>
  );
};

Products.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  searchQuery: PropTypes.string.isRequired,
  setSearchQuery: PropTypes.func.isRequired,
};

export default Products;
