// app.js
const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const expressValidator = require("express-validator");
require("./app/config/initialMongoServer");
const product = require("./app/routes/product.route");
const swaggerUi = require("swagger-ui-express"),
  swaggerDocument = require("./swagger.json");
const app = express(); // initialize our express app
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cors());
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use("/products", product);

let port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log("Server is up and running on port numner " + port);
});
