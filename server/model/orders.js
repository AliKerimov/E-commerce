const mongoose = require("mongoose");
const validator = require("validator");
// const ordersSchema = mongoose.Schema({
//   product: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "products",
//     required: true,
//   },
//   user: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: "user",
//     required: true,
//   },
//   quantity: {
//     type: Number,
//     default: 1,
//   },
// });
const ordersSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: [true, 'User ID is required.'],
    },
    products: [
      {
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'products',
          required: [true, 'Please provide a product id.'],
        },
        quantity: {
          type: Number,
          required: [true, 'Please provide a product quantity.'],
        },
      },
    ],
  },
  { timestamps: true, toJSON: { virtuals: true }, toObject: { virtuals: true } }
);
ordersSchema.pre(/find/, function (next) {
  this.populate({
    path: "products.product",
  }).populate({
    path: "user",
    select: "-password",
  });
  next();
});

const Orders = mongoose.model("orders", ordersSchema);
module.exports = Orders;
