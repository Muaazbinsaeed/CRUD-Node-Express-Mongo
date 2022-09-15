// controllers/products.js
const Product = require("../models/product.model");
const { body, query, validationResult } = require("express-validator/check");

//Create Product
exports.createProduct = async (req, res, next) => {
  try {
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    let product = new Product({
      name: req.body.name,
      price: req.body.price,
    });
    await product.save();
    res.status(200).json({
      message: "Product Created successfully",
      product,
    });
  } catch (error) {
    console.log({ error });
    return next(error);
  }
};
//Fetch Product
exports.fetchProduct = async (req, res, next) => {
  try {
    const id = req?.query?.id;
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    Product.findById(id, (err, product) => {
      if (err) return next(err);
      res.send(product);
    });
  } catch (error) {
    console.log({ error });
    return next(error);
  }
};
//Fetch All Products
exports.fetchAllProducts = async (req, res, next) => {
  try {
    Product.find((err, docs) => {
      if (!err) {
        res.status(200).json({ message: "Products", products: docs });
      } else {
        return next(error);
      }
    });
  } catch (error) {
    console.log({ error });
    return next(error);
  }
};
//Update Product
exports.updateProduct = async (req, res, next) => {
  try {
    const id = req?.query?.id;
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }
    Product.findByIdAndUpdate(id, { $set: req.body }, (err, product) => {
      if (err) return next(err);
      res
        .status(200)
        .json({ message: "Product updated", updatedProduct: product });
    });
  } catch (error) {
    console.log({ error });
    return next(error);
  }
};
//Delete Product
exports.deleteProduct = async (req, res, next) => {
  try {
    const id = req?.query?.id;
    const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions
    if (!errors.isEmpty()) {
      res.status(422).json({ errors: errors.array() });
      return;
    }

    Product.findByIdAndRemove(id, (err, product) => {
      if (err) return next(err);
      res
        .status(200)
        .json({ message: "Product Deleted", deleteProduct: product });
    });
  } catch (error) {
    console.log({ error });
    return next(error);
  }
};

//Body Validation
exports.validate = (method) => {
  switch (method) {
    case "createProduct": {
      return [
        body("name", "name doesnot exists").exists(),
        body("price", "phone doesnot exists").isInt().exists(),
      ];
    }
    case "fetchProduct": {
      return [query("id", "id doesnot exists in params").exists()];
    }
    case "updateProduct": {
      return [
        query("id", "id doesnot exists in params").exists(),
        body("name", "name doesnot exists").exists(),
        body("price", "phone doesnot exists").isInt().exists(),
      ];
    }
    case "deleteProduct": {
      return [query("id", "id doesnot exists in params").exists()];
    }
  }
};
