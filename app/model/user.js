"use strict";

const CONSTANTS = require("../constants.js");
const mongoose = require("mongoose");
const db = mongoose.connect(`mongodb://${CONSTANTS.MONGODB_HOSTNAME}:${CONSTANTS.MONGODB_PORT}/user`);
const REGEXP_USER_NAME = /^[a-zA-Z0-9\_]+$/;
const REGEXP_MAIL = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/;

const userNameValidator = function (v) {
  return (v.length > 0) && (REGEXP_USER_NAME.test(v));
};
const mailValidator = function (v) {
  return REGEXP_MAIL.test(v);
};
const passwordValidator = function (v) {
  return v.length > 0;
};

const UserSchema = new mongoose.Schema({
  user_name: {
    type: String,
    validate: [userNameValidator, "Invalid user name error"]
  },
  mail: {
    type: String,
    validate: [mailValidator, "Invalid mail address error"],
    unique: true
  },
  password: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now()
  }
}, {collection: "users"});

const UserModel = mongoose.model("User", UserSchema);
module.exports = UserModel;
