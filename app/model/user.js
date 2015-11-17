"use strict";

const CONSTANTS = require("../constants.js");
const mongoose = require("mongoose");
const db = mongoose.connect(`mongodb://${CONSTANTS.MONGODB_HOSTNAME}:${CONSTANTS.MONGODB_PORT}/trn_user`);

const validator = function (v) {
  return v.length > 0;
};

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    validate: [validator, "Empty Error"]
  },
  created: {
    type: Date,
    default: Date.now()
  }
});

const UserModel = mongoose.model("UserModel", UserSchema);
module.exports = UserModel;
