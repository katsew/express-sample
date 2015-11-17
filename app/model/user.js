"use strict";

const CONSTANTS = require("../constants.js");
const mongoose = require("mongoose");
const db = mongoose.connect(`mongodb://${CONSTANTS.MONGODB_HOSTNAME}:${CONSTANTS.MONGODB_PORT}/trn_user`);

let validator = function (v) {
  return v.length > 0;
};

mongoose.connection.on("connected", function () {
  console.log(`Connect to mongoose done.`);
});
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: [validator, "Enpty Error"]
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
