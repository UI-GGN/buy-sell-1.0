import { combineReducers } from "redux";
import productReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  wishlistReducer,
});

export default rootReducer;
