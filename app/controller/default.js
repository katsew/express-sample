"use strict";

const express = require("express");
const verifyLogin = require("../util/login-verification.js");
const DefaultController = express.Router({
  caseSensitive: true
});

DefaultController.get("/", (req, res) => {
  res.render("index", {
    title: "hello jade",
    message: "this is a message from server express"
  });
});

module.exports = DefaultController;
