const Orders = require("../model/orders");
const Product = require("../model/product");
const globalFilter = require("../utils/globalFilter");
const { asyncCatch } = require("../utils/asyncCatch");
const GlobalError = require("../error/GlobalError");
const User = require("../model/user");
const Products = require("../model/product");

exports.getAllOrders = asyncCatch(async (req, res) => {
  let orders = await Orders.find();

  res.status(201).json({
    success: true,
    length: orders.length,
    data: {
      orders: orders,
    },
  });
});

// exports.createOrder = asyncCatch(async (req, res) => {
//   const p = await Product.findById(req.params.id);
//   // console.log(p);
//   const newOrder = await Orders.create(req.body);
//   res.json({
//     success: true,
//     data: {
//       newOrder,
//     },
//   });
// });
exports.createOrder = asyncCatch(async (req, res, next) => {
  const cart = await Orders.findOne({ user: req.user._id.toString() });
  // console.log(req.user);
  if (!cart) return next(new GlobalError("No user found with that ID!", 404));
  const id=req.params.id;
  const product = await Products.findById(id);
  // console.log(req.params);
  console.log(product);
  if (!product) return next(new GlobalError("Product does not found.", 404));
  // console.log(cart.products);
  let products = [...cart.products];

  if (products.find((el) => el.product.toString() === req.params.id)) {
    products.find(
      (el) => el.product.toString() === req.params.id
    ).quantity += req.body.quantity;
  } else {
    products.push({
      product: req.params.id,
      quantity: req.body.quantity,
    });
    // console.log(products);
  }

  const updatedCart = await Orders.findByIdAndUpdate(
    cart.id,
    { products },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: "success",
    data: { cart: updatedCart },
  });
});
exports.createCart = asyncCatch(async (req, res, next) => {
  const cart = await Orders.create(req.body);

  res.status(201).json({
    status: "success",
    data: {
      cart,
    },
  });
});
exports.updateOrder = asyncCatch(async (req, res, next) => {
  const cart = await Orders.findOne({ user: req.user._id.toString() });
  if (!cart) return next(new GlobalError("No user found with that ID!", 404));

  const product = await Product.findById(req.params.productId);
  if (!product) return next(new GlobalError("Product does not found.", 404));

  let products = [...cart.products];

  const cartProduct = products.find(
    (el) => el.product.toString() === req.params.productId
  );

  cartProduct.quantity = req.body.quantity;

  const updatedCart = await Orders.findByIdAndUpdate(
    cart.id,
    { products },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: "success",
    data: {
      cart: updatedCart,
    },
  });
});
// exports.updateOrder = asyncCatch(async (req, res) => {
//   const id = req.params.id;
//   const updateOrder = await Orders.findByIdAndUpdate(id, req.body, {
//     new: true,
//   });

//   if (!this.updateOrder) return next(new GlobalError("`Invalid ID`", 404));

//   res.json({ success: true, data: { updateOrder } });
// });

exports.deleteOrder = asyncCatch(async (req, res, next) => {
  const cart = await Orders.findOne({ user: req.user._id.toString() });
  if (!cart) return next(new GlobalError("No user found with that ID!", 404));

  const product = await Product.findById(req.params.productId);
  if (!product) return next(new GlobalError("Product does not found.", 404));

  let products = [...cart.products];

  products = products.filter(
    (el) => el.product.toString() !== req.params.productId
  );

  const updatedCart = await Orders.findByIdAndUpdate(
    cart.id,
    { products },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: "success",
    data: {
      cart: updatedCart,
    },
  });
});
// exports.deleteOrder = asyncCatch(async (req, res, next) => {
//   const id = req.params.id;

//   const deleteOrder = await Orders.findByIdAndRemove(id);

//   if (!deleteOrder) {
//     return next(new GlobalError("`Invalid ID`", 404));
//   }

//   res.json({ success: true });
// });

exports.clearOrders = asyncCatch(async (req, res, next) => {
  const cart = await Orders.findOne({ user: req.user._id.toString() });
  if (!cart) return next(new GlobalError("No user found with that ID!", 404));

  const updatedCart = await Orders.findByIdAndUpdate(
    cart.id,
    { products: [] },
    {
      new: true,
      runValidators: true,
    }
  );
  res.status(200).json({
    status: "success",
    data: {
      cart: updatedCart,
    },
  });
});