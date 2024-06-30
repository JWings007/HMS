const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
  },
  password: {
    type: String,
  },
  refreshToken: {
    type: String,
  },
});

module.exports = mongoose.model("User", UserSchema);
