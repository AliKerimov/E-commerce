const mongoose = require("mongoose");
const validator = require("validator");

const productSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name must be defined!"],
      unique: true,
      trim: true,
      minLength: [3, "Product name must be at least 3 characters"],
      maxLength: [45, "Product name must be at exeed 15 characters"],
      // validate:[validator.isAlpha,"Only special characters!"],
    },
    price: Number,
    categories: {
      type: Array,
    },

    // assets:String,//but future array !required
    images: [
      {
        type: Array,
        required: [true, "Image must be defined!"],
      },
    ],
    
    color: {
      type:  Array,
      required: [true, "Color must be defined!"],
    },
    size: {
      type:  Array,
      // required: [true, "Size must be defined!"],
    },
    
  },
  { timestapms: true }
);

const Products = mongoose.model("products", productSchema);
module.exports = Products;
