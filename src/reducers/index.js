import { combineReducers } from "redux";
import productReducer from "./productsReducer";
//import reducer from './reducer';
//import loginReducer from './loginReducer';

const rootReducer = combineReducers({
  productReducer,
});

export default rootReducer;
