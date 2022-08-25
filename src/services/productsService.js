import productList from "../components/products/ProductList";

export default {
  getList: function (page) {
    if (page == 1) {
      return productList;
    } else {
      return productList.slice(0, 15);
    }
  },
};
