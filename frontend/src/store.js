import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
  newProductReducer,
  pproductReducer,
  productReducer,
} from "./reducers/productReducers.js";
import { userReducer } from "./reducers/userReducer.js";
import { cartReducer } from "./reducers/cartReducer.js";
const reducer = combineReducers({
  products: productReducer,
  user: userReducer,
  cart: cartReducer,
  newProduct: newProductReducer,
  deleteProduct: pproductReducer,
  updateProduct: pproductReducer,
});

let initialState = {
  cart: {
    cartItems: localStorage.getItem("cartItems")
      ? JSON.parse(localStorage.getItem("cartItems"))
      : [],
  },
};
const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
