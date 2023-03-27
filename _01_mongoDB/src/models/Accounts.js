const mongoose = require("mongoose");

const AccountsSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  info: String,
});

const Accounts = mongoose.model("_01Accounts", AccountsSchema);

module.exports = Accounts;
