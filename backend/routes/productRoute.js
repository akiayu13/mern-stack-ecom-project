const express = require("express");
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductDetails,
} = require("../controllers/productController");
const { isAuthenticatedUser, authRole } = require("../middleware/auth");

const router = express.Router();

router.route("/product").get(getAllProducts);

router.route("/product/new").post(createProduct);
router.route("/cart/:id").put(updateProduct);
router
  .route("/product/:id")
  .put(updateProduct)
  .delete(isAuthenticatedUser, deleteProduct)
  .get(getProductDetails);

module.exports = router;
