const ADD_TO_CART = "ADD_TO_CART";
const REMOVE_CART_ITEM = "REMOVE_CART_ITEM";

export const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const item = action.payload;
      console.log(state.cartItems);
      const isItemExist = state.cartItems.find(
        (i) => i.product === item.product
      );
      //   console.log(
      //     `**************************** ${isItemExist.product} ***********************`
      //   );

      if (isItemExist) {
        console.log("dsdhssjsfnjkdsfksjdfndskfjdskjfndkf");
        return {
          ...state,
          cartItems: state.cartItems.map((i) =>
            i.product === isItemExist.product ? item : i
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }

    case REMOVE_CART_ITEM:
      return {
        ...state,
        cartItems: state.cartItems.filter((i) => i.product !== action.payload),
      };
    default:
      return state;
  }
};
