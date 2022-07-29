import React from "react";
import { Link } from "react-router-dom";
// import { Rating } from "@material-ui/lab";

const ProductCard = ({ product }) => {
  const options = {
    value: product.ratings,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <div className="productCard">
      <p>{product.name}</p>

      <span>{`₹${product.price}`}</span>
    </div>
  );
};

export default ProductCard;
