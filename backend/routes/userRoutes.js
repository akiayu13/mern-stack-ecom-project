const express = require("express");
// const { getUserDetails } = require("../../frontend/src/actions/userAction.mjs");
const {
  registerUser,
  loginUser,
  logout,
  getUserDetails,
} = require("../controllers/userController");
const { isAuthenticatedUser, authRole } = require("../middleware/auth");
const router = express.Router();

router.route("/register").post(registerUser);
router.route("/login").post(loginUser);
router.route("/logout").get(logout);
router.route("/me").get(isAuthenticatedUser, getUserDetails);
module.exports = router;
