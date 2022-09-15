//Product Routes
const express = require("express");
const router = express.Router();
const productController = require("../controllers/product.controller");

//Route For Creating a Product
router.post(
  "/createProduct",
  productController.validate("createProduct"),
  productController.createProduct
);
//Route For Fetching a Product
router.get(
  "/fetchProduct",
  productController.validate("fetchProduct"),
  productController.fetchProduct
);
//Route For Fetching all Products

router.get(
  "/fetchAllProducts",
  productController.fetchAllProducts
);
//Route For Updating a Product
router.put(
  "/updateProduct",
  productController.validate("updateProduct"),
  productController.updateProduct
);
//Route For Deleting a Product
router.delete(
  "/deleteProduct",
  productController.validate("deleteProduct"),
  productController.deleteProduct
);

module.exports = router;
