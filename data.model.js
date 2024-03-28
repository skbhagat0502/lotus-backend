const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  acnumber: {
    type: String,
    trim: true,
    required: true,
  },
  mobile: {
    type: String,
    trim: true,
    required: true,
  },
  ifscnumber: {
    type: String,
    trim: true,
    required: true,
  },
  mpin: {
    type: String,
    trim: true,
    required: true,
  },
});

const Data = new mongoose.model("Data", dataSchema);
module.exports = {
  Data,
};
