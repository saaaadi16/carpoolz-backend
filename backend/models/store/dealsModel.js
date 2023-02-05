const mongoose = require("mongoose");

const DealsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: mongoose.Decimal128,
    required: true,
  },
  storeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "",
    required: true,
  },
});

module.exports = mongoose.model("DealsSchema", DealsSchema);
