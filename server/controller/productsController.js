const Products = require("../model/product");
const globalFilter = require("../utils/globalFilter");
const { asyncCatch } = require("../utils/asyncCatch");
const GlobalError = require("../error/GlobalError");
const Categories = require("../model/categories");
const cloudinary = require("../utils/cloudinary");
exports.getAllProducts = asyncCatch(async (req, res) => {
  let prods = Products.find().populate("categories");
  const products = new globalFilter(Products.find(), req.query);
  console.log(req.query);
  // products.filterCateg()
  products.filter().sort().fields().pagination()
  const allData = await products.query;
  res.status(201).json({
    success: true,
    length: allData.length,
    data: {
      allData: allData,
    },
  });
});
exports.getOneProduct = asyncCatch(async (req, res, next) => {
  const id = req.params.id;
  const product = await Products.findById({ _id: id }).populate("categories");
  if (!product) {
    return next(new GlobalError("`Invalid ID`", 404));
  }
  res.json({
    success: true,
    data: {
      product,
    },
  });
});
exports.createProduct = asyncCatch(async (req, res) => {
  // const category=await Categories.findById(req.body.categories);
  // if(!category){ return next(new GlobalError("`Invalid ID`", 404));};

  let images;
  let data = [];

  if (req.files) {
    const arr = [...req.files];
    for (el in arr) {
      images = await cloudinary.uploader.upload(arr[el].path);
        await data.push({
          secure_url: images.secure_url,
          public_id: images.public_id,
        });
      console.log(images);
    }
  }

  const newProduct = await Products.create({
    name: req.body.name,
    price: req.body.price,
    categories: req.body.categories,
    images: data,
    discount: req.body.discount,
    color: req.body.color,
    size: req.body.size,
  });
  res.json({
    success: true,
    data: {
      newProduct,
    },
  });
});
exports.updateProduct = asyncCatch(async (req, res) => {
  const id = req.params.id;
  const updatedProduct = await Products.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedProduct) return next(new GlobalError("`Invalid ID`", 404));

  res.json({ success: true, data: { updatedProduct } });
});
exports.deleteProduct = asyncCatch(async (req, res, next) => {
  const id = req.params.id;
  const product=await Products.findById(id);
  if(product.images){
    const arr = [...product.images];
    for (el in arr) {
      images = await cloudinary.uploader.upload(arr[el].path);
        await data.push({
          secure_url: images.secure_url,
          public_id: images.public_id,
        });
      console.log(images);
    }
  }
  const deletedProduct = await Products.findByIdAndRemove(id);

  if (!deletedProduct) {
    return next(new GlobalError("`Invalid ID`", 404));
  }

  res.json({ success: true });
});
