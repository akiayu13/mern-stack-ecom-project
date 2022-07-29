import React, { Fragment, useEffect } from "react";
// import { CgMouse } from "react-icons/cg";
import Product from "./Product.js";
import MetaData from "../layout/MetaData.js";
import { getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import "./Home.css";

// const product = {
//   name: "Product 1",
//   images: [
//     {
//       url: "https://expertphotography.b-cdn.net/wp-content/uploads/2018/09/product-photography-types-water-bottle.jpg",
//     },
//   ],
//   price: "$1000",
//   _id: "hoe",
// };
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { error, products } = useSelector((state) => state.products);
  useEffect(() => {
    if (error) {
      return alert.error(error);
    }
    dispatch(getProduct());
  }, [dispatch, error]);

  return (
    <Fragment>
      <MetaData title="ShoppingKart" />
      <div className="banner">
        <p>Welcome to ShoppingKart.com</p>
        <h1>FIND AMAZING PRODUCTS BELOW</h1>
        <a href="#container">
          <button>Go to Products</button>
        </a>
      </div>
      <h2 className="homeHeading">Products</h2>

      <div className="container" id="container">
        {products &&
          products.map((product) => (
            <Product id={product._id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Home;
