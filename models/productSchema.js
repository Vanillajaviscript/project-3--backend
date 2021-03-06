const mongoose = require('mongoose');

const productSchema = new mongoose.Schema (
  {
    name: String,
    price: Number,
    quantity: Number,
    img: String,
    description: String,
    reviews: Array
  },
  {timestamps: true}
)

const Product = mongoose.model("Product", productSchema);

module.exports = Product