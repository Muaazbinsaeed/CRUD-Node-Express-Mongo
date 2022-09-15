//Initial Mongo Connection
const mongoose = require("mongoose");
let uri = process.env.MONGODB_URL || "mongodb://localhost:27017/products";
mongoose.connect(uri, {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", () => {
  console.log("Connected successfully");
});
