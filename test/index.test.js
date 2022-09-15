const Product = require("../app/models/product.model");
const { expect } = require("chai");
const sinon = require("sinon");

describe("Product Service Unit Tests", function () {
  this.afterEach(() => {
    sinon.restore();
  });
  describe("Save Product functionality", function () {
    it("should successfully add a product if the number of products in the DB with the same profiled is zero", async function () {
      let productName = "Test Product";
      let productPrice = 190;
      sinon.stub(Product, "countDocuments").returns(0);
      sinon
        .stub(Product.prototype, "save")
        .returns({ productName, productPrice });
      let returnedProduct = new Product({
        name: productName,
        price: productPrice,
      });
      await returnedProduct.save();
      expect(returnedProduct.name).to.equal(productName);
      expect(returnedProduct.price).to.equal(productPrice);
    });
  });
  describe("Get Product functionality", function () {
    it("should return correct name and price of the product after calculation", async function () {
      let productId = "62ff3f3d89873509b11cdd57";
      let fakeProduct = {
        _id: "62ff3f3d89873509b11cdd57",
        name: "Test123",
        price: 100,
        __v: 0,
      };
      sinon.stub(Product, "findOne").returns(fakeProduct);
      const returnedProduct = await Product.findOne({ id: productId });
      expect(returnedProduct.name).to.equal(fakeProduct.name);
      expect(returnedProduct.price).to.equal(fakeProduct.price);
      expect(returnedProduct.id).to.equal(fakeProduct.id);
    });
    it("should give error if invalid if there is no product found with provided profileId", async function () {
      const productId = 1;
      sinon.stub(Product, "findOne").returns(null);
      try {
        await Product.findOne({ id: productId });
      } catch (error) {
        expect(error.message).to.equal(
          "No product not found with given productId"
        );
      }
    });
  });
});
