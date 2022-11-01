const mongoose = require("mongoose");
const validator=require("validator");
const slugify=require("slugify");
const categoriesSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name must be defined!'],
        // validate:[validator.isAlpha,"Only special characters!"],
    },
    parent_id: {
        type: String,
    },
    slug:String,
    
    // discount:Boolean,
    // size: {
    //     type: String,
         // required: [true, 'Size must be defined!'],
    // },
    // discount:{
    //     type:Number,
    //     validate:{validator:function(doc){
    //         return this.price>doc;
    //     },
    //     message:`Discount of ({VALUE}) must not exceed the price!`
    // }
    // }

});
categoriesSchema.pre("save", function (next) {
    this.slug = slugify(this.name, "-");
    this.start = Date.now();
    next();
  });
  
  categoriesSchema.post("save", function (document, next) {
    this.slug = slugify(this.name, "-");
    console.log(Date.now() - this.start);
    next();
  });
const Categories = mongoose.model("categories", categoriesSchema);
module.exports = Categories;