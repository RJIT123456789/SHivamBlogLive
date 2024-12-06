const mongoose = require("mongoose");

// define schema

const AdminSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },

    email: {
      type: String,
      require: true,
    },


    password: {
        type: String,
        require: true,
      },
    role:{
        type:String,
        default:'user'

    }
      // cpassword: {
      //   type: String,
      //   require: true,
      // },
  },
  { timestamps: true }
);

const AdminModel = mongoose.model("admin", AdminSchema);
module.exports = AdminModel;
