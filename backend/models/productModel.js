const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter product name"],
    },
    price: {
      type: Number,
      maxLength: [8, "price cannot exceed 8 characters"],
      required: [true, "Please enter product price"],
    },
    desc: {
      type: String,
      required: [true, "Please enter product description"],
    },
    img: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Product", productSchema);
