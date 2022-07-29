import React, { useState } from "react";
import { useDispatch } from "react-redux";
import "./Product.css";
import { addItemsToCart } from "../../actions/cartAction";
import { useAlert } from "react-alert";

const Product = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const dispatch = useDispatch();
  const alert = useAlert();
  const increaseQuantity = () => {
    const qty = quantity + 1;
    setQuantity(qty);
    console.log(qty);
  };

  const decreaseQuantity = () => {
    if (quantity === 0) return;
    const qty = quantity - 1;
    setQuantity(qty);
    console.log(qty);
  };

  const addToCartHandler = () => {
    if (quantity === 0) {
      alert.error("Product Quantity Nil");
      return;
    }
    dispatch(addItemsToCart(product._id, quantity));
    alert.success("Item Added To Cart");
  };
  // useEffect(() => {
  //   if (error) {
  //     return alert.error(error);
  //   }
  //   dispatch(getProduct());
  // }, [dispatch, error]);

  return (
    <div className="productCard">
      <img src={product.img} alt={product.name} />
      <p>{product.name}</p>
      <span>${product.price}</span>
      <span>
        <i>{product.desc}</i>
      </span>
      <div>
        <div className="detailsBlock-3-1">
          <div className="dss">
            <button
              onClick={decreaseQuantity}
              className="btn btn-secondary btn-sm"
            >
              -
            </button>
            <span className="badge badge-secondary m-2">{quantity}</span>
            <button
              className="btn btn-secondary btn-sm"
              onClick={increaseQuantity}
            >
              +
            </button>
          </div>
          <button onClick={addToCartHandler}>Add to Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
