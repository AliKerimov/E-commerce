const Categories = require('../model/categories')
const globalFilter = require("../utils/globalFilter");
const {asyncCatch} =require('../utils/asyncCatch')
const GlobalError = require("../error/GlobalError");
exports.getAllCategory = asyncCatch(async (req, res) => {
    let prods = Categories.find();
    const categories = new globalFilter(Categories.find(), req.query);
    categories.filter().sort().fields().pagination();
    const allData = await categories.query;
    res.status(201).json({
        success: true,
        length: allData.length,
        data: {
          allData: allData,
        },
      });

})
exports.getOneCategory = asyncCatch(async (req, res,next) => {

    const id = req.params.id
    const category = await Categories.findById({ _id: id });
    if (!category) {
        return next(new GlobalError("`Invalid ID`", 404));
    }
    res.json({
        success: true,
        data: {
            category,
        }
    });

})
exports.createCategory = asyncCatch(async (req, res) => {

    const newCategory = await Categories.create(req.body);
    res.json({
        success: true,
        data: {
            newCategory,
        }
    });


})
exports.updateCategory= asyncCatch(async (req, res) => {
    const id = req.params.id;
    const updateCategory= await Categories.findByIdAndUpdate(id, req.body, {
        new: true,
    });

    if (!this.updateCategory) return next(new GlobalError("`Invalid ID`", 404));

    res.json({ success: true, data: { updateCategory} });


})
exports.deleteCategory= asyncCatch(async (req, res,next) => {
    const id = req.params.id;

    const deleteCategory= await Categories.findByIdAndRemove(id);

    if (!deleteCategory){
    return next(new GlobalError("`Invalid ID`", 404));}

    res.json({ success: true });

})