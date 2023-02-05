var mongoose = require("mongoose");

const DriverModel = new mongoose.Schema({
  userID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    require: true,
  },
  cnic: {
    type: String,
    required: true,
  },
  licenseNo: {
    type: String,
    required: true,
  },
  rating: {
    type: mongoose.Types.Decimal128,
    required: true,
  },
});

module.exports = mongoose.model("Driver", DriverModel);
