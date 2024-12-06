const mongoose = require("mongoose");

// define schema
const CategorySchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
});

const CategoryModel = mongoose.model("category", CategorySchema);
module.exports = CategoryModel;
