import React, { Fragment, useEffect, useState } from "react";
import "./UpdateProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, updateProduct } from "../../actions/productAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import DescriptionIcon from "@material-ui/icons/Description";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";
import AttachMoneyIcon from "@material-ui/icons/AttachMoney";

import { UPDATE_PRODUCT_RESET } from "../../constants/productConstants";

const UpdateProduct = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();

  const { loading, error, success } = useSelector(
    (state) => state.updateProduct
  );
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [images, setImages] = useState("");

  useEffect(() => {
    if (error) {
      alert.show(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Product Updated Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: UPDATE_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(updateProduct(id, name, price, description, images));
  };

  return (
    <Fragment>
      <MetaData title="Create Product" />
      <div className="newProductContainer">
        <form
          className="createProductForm"
          encType="multipart/form-data"
          onSubmit={createProductSubmitHandler}
        >
          <h1>Update Product</h1>
          <div>
            <SpellcheckIcon />
            <input
              type="text"
              placeholder="Product id"
              required
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </div>

          <div>
            <SpellcheckIcon />
            <input
              type="text"
              placeholder="Product Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <AttachMoneyIcon />
            <input
              type="number"
              placeholder="Price"
              required
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>

          <div>
            <DescriptionIcon />

            <textarea
              placeholder="Product Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              cols="30"
              rows="1"
            ></textarea>
          </div>

          <div id="createProductFormImage">
            <SpellcheckIcon />
            <input
              type="text"
              placeholder="Image url"
              required
              value={images}
              onChange={(e) => setImages(e.target.value)}
            />
          </div>
          <Button
            id="createProductBtn"
            type="submit"
            disabled={loading ? true : false}
          >
            Update
          </Button>
        </form>
      </div>
    </Fragment>
  );
};

export default UpdateProduct;
