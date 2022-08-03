import axios from "axios";

const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

// Add to Cart
export const addItemsToCart = (id, quantity) => async (dispatch, getState) => {
  console.log(id);
  const { data } = await axios.get(`/product/${id}`);
  // console.log(`edsfdfdsf   ${req.protocol}://${req.get("host")} dfdsf`);
  // console.log(data.quantity);
  // console.log("sfd");
  dispatch({
    type: ADD_TO_CART,
    payload: {
      product: data.product._id,
      name: data.product.name,
      price: data.product.price,
      img: data.product.img,
      //stock: data.product.Stock,
      quantity,
    },
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};

// REMOVE FROM CART
export const removeItemsFromCart = (id) => async (dispatch, getState) => {
  dispatch({
    type: REMOVE_CART_ITEM,
    payload: id,
  });

  localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
};
