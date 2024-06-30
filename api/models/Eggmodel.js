const { mongoose } = require("mongoose");

const EggSchema = new mongoose.Schema({
  date: {
    type: String,
  },
  price: {
    type: Number,
  },
});

module.exports = mongoose.model("Egg", EggSchema);
