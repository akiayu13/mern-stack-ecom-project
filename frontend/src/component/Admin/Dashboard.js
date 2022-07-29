import "./Dashboard.css";
import { Button, colors } from "@material-ui/core";
import MetaData from "../layout/MetaData";
import { Link, Router } from "react-router-dom";
import { Fragment } from "react";
const Dashboard = ({ history }) => {
  const createProductSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <Fragment>
      <MetaData title="Admin Dashboard" />
      <div className="newProductContainer">
        <form
          className="createProductForm"
          encType="multipart/form-data"
          onSubmit={createProductSubmitHandler}
        >
          <h1>Admin Dashboard</h1>
          <Button id="createProductBtn" type="submit">
            <Link to="/admin/product" style={{ textDecoration: "none" }}>
              Add Product
            </Link>
          </Button>
          <Button id="createProductBtn" type="submit">
            <Link style={{ textDecoration: "none" }} to="/admin/delete">
              Delete Product
            </Link>
          </Button>
          <Button id="createProductBtn" type="submit">
            <Link style={{ textDecoration: "none" }} to="/admin/update">
              Update Product
            </Link>
          </Button>
        </form>
      </div>
    </Fragment>
  );
};

export default Dashboard;
