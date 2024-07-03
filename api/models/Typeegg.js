const mongoose = require("mongoose");

const VaritiesSchema = new mongoose.Schema({
  verity: {
    type: String,
  },
  price: {
    type: String,
    default: 6,
  },
});

module.exports = mongoose.model("Verity", VaritiesSchema);
