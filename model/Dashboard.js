const mongoose = require("mongoose");

// define schema
const dashboardSchema = new mongoose.Schema({
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
});

const dashboardModel = mongoose.model("dashboard", dashboardSchema);
module.exports = dashboardModel;
