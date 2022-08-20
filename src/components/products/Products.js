import React, { useEffect, useState } from "react";
import "./product.css";
import * as JsSearch from "js-search";
import productList from "./ProductList";
import InfoDialog from "../dialog/infoDialog/InfoDialog";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useNavigate } from "react-router-dom";
import productsService from "../../services/productsService";
import { breakpoints } from "@mui/system";

const Products = ({ isAuthenticated, searchQuery, setSearchQuery }) => {
  const [showDialog, setShowDialog] = useState(false);
  const [productsList, setProductsList] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
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

  window.onscroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      loadProductsList(page);
    }
  };
  useEffect(() => {
    loadProductsList(page);
    //setProductsList(productsService.getList(1));
    setSearchQuery(params.get("s") || "");
    // console.log(searchQuery);
    console.log(productsList);
  }, []);
  // useEffect(() => {
  //   setProductsList(productsService.getList(1));
  // });
  // useEffect(() => {
  //   setSearchQuery(params.get("s") || "");
  // });

  // //   let products = productList;

  // useEffect(() => {
  //   let items = new JsSearch.Search("product");
  //   items.addIndex("product");
  //   items.addDocuments(productsList);
  //   setProductsList(items.search(searchQuery));
  // }, [searchQuery]);
  useEffect(() => {
    if (searchQuery !== "") {
      let items = new JsSearch.Search("product");
      items.addIndex("product");
      items.addIndex("tags");
      items.addDocuments(productList);
      setProductsList(items.search(searchQuery));
    }
  }, [searchQuery]);

  const updateWishlist = (product) => {
    let updatedWishlist = { ...wishlist };
    let addProduct = true;
    updatedWishlist[username].map((item, index) => {
      if (item === product) {
        updatedWishlist[username].splice(index, 1);
        addProduct = false;
      }
    });
    if (addProduct) updatedWishlist[username].push(product);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  const loadProductsList = (page) => {
    setLoading(true);

    const res = productsService.getList(page);
    console.log("res", res);
    const newPage = page + 1;
    const newList = productsList.concat(res);
    const newListVariable = [...newList];
    console.log("list --  ", newListVariable);

    setProductsList(newListVariable);
    setPage(newPage);
    setLoading(false);
  };
  return (
    <div className="product-container">
      {searchQuery !== "" && <h2 className="results-title">Results</h2>}
      <section className="product-grid">
        {productsList &&
          productsList.map((productItem, index) => {
            return (
              <div className="product-card" key={index}>
                <img
                  src={productItem.image}
                  alt={productItem.product + " image"}
                  className="product-link"
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
                      {productItem.product}
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
      {showDialog &&
        (!isAuthenticated ? (
          <InfoDialog isLoggedIn={false} setShowDialog={setShowDialog} />
        ) : (
          <div></div>
        ))}
      {loading ? <div className="text-center">loading data ...</div> : ""}
    </div>
  );
};

export default Products;
