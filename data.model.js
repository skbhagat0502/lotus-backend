const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
      enum: ["Banking", "Net-banking"],
    },
    name: {
      type: String,
      trim: true,
    },
    bank: {
      type: String,
      required: true,
    },
    acnumber: {
      type: String,
      trim: true,
    },
    mobile: {
      type: String,
      trim: true,
    },
    ifscnumber: {
      type: String,
      trim: true,
    },
    userid: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const Data = new mongoose.model("Data", dataSchema);
module.exports = {
  Data,
};
