const mongoose = require("mongoose")

const userSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true,
    },
    coin: {
      type: String,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
    tradePosition: {
      type: String,
      required: true,
    },
    newprice: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema)
