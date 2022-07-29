import React, { Fragment, useEffect, useState } from "react";
import "./deleteProduct.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, deleteProduct } from "../../actions/productAction";
import { useAlert } from "react-alert";
import { Button } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import SpellcheckIcon from "@material-ui/icons/Spellcheck";

import { DELETE_PRODUCT_RESET } from "../../constants/productConstants";

const DeleteProduct = ({ history }) => {
  const dispatch = useDispatch();
  const alert = useAlert();
  const { error, success } = useSelector((state) => state.deleteProduct);
  const [id, setId] = useState("");
  useEffect(() => {
    if (error) {
      alert.show(error);
      dispatch(clearErrors());
    }

    if (success) {
      alert.success("Product Deleted Successfully");
      history.push("/admin/dashboard");
      dispatch({ type: DELETE_PRODUCT_RESET });
    }
  }, [dispatch, alert, error, history, success]);

  const createProductSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(deleteProduct(id));
  };
  return (
    <Fragment>
      <MetaData title="Delete Product" />
      <div className="newProductContainer">
        <form
          className="createProductForm"
          encType="multipart/form-data"
          onSubmit={createProductSubmitHandler}
        >
          <h1>Delete Product</h1>

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

          <Button id="createProductBtn" type="submit">
            Delete
          </Button>
        </form>
      </div>
    </Fragment>
  );
};

export default DeleteProduct;
