import { combineReducers } from "redux";
import productReducer from "./productsReducer";
import cartReducer from "./cartReducer";
import wishlistReducer from "./wishlistReducer";
import addressReducer from "./addressReducer";

const rootReducer = combineReducers({
  productReducer,
  cartReducer,
  wishlistReducer,
  addressReducer,
});

export default rootReducer;
