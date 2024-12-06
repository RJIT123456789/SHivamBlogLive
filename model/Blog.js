const mongoose = require("mongoose");

// define schema

const BlogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },

    description: {
      type: String,
      require: true,
    },

    image: {
      public_id: {
        type: String,
      },
      url: {
        type: String,
      },
    },
  },
  { timestamps: true }
);

const BlogModel = mongoose.model("blog", BlogSchema);
module.exports = BlogModel;
