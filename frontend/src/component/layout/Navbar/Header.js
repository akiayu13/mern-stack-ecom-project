import React from "react";
import Badge from "react-bootstrap/Badge";
import { BsCart3 } from "react-icons/bs";
import "./Header.css";
import { useSelector } from "react-redux";
import { logout } from "../../../actions/userAction.mjs";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useAlert } from "react-alert";
const Header = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const alert = useAlert();
  function logoutUser() {
    dispatch(logout());
    alert.success("Logged out Successfully");
  }
  return (
    <>
      <div class="root">
        <div class="header">
          <div class="logo">
            <Link to="/home">
              <div class="logo">
                <img
                  src={require("../../images/logo.png")}
                  width="70px"
                  alt="logo"
                />
                <h1>ShoppingKart.com</h1>
              </div>
            </Link>
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/home" style={{ textDecoration: "none" }}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/home#container" style={{ textDecoration: "none" }}>
                  Products
                </Link>
              </li>
              {!isAuthenticated && (
                <li>
                  <Link to="/signin" style={{ textDecoration: "none" }}>
                    Login
                  </Link>
                </li>
              )}
              {isAuthenticated && user.role === "admin" && (
                <li>
                  <Link to="/admin" style={{ textDecoration: "none" }}>
                    Dashboard
                  </Link>
                </li>
              )}
              {isAuthenticated && (
                <li>
                  <Link
                    to="/home"
                    onClick={logoutUser}
                    style={{ textDecoration: "none" }}
                  >
                    Logout
                  </Link>
                </li>
              )}
            </ul>
          </nav>
          <div class="cart_logo">
            <Link to="/cart" style={{ textDecoration: "none" }}>
              <Badge className="op" bg="black">
                {cartItems.length}
              </Badge>
              <BsCart3></BsCart3>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
