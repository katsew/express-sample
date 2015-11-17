"use strict";

const express = require("express");
const DefaultController = express.Router({
  caseSensitive: true
});

DefaultController.get("/top", (req, res) => {
  res.render("top/index", {
    title: "hello top page",
    message: "this is a message from server express yo!"
  });
});

DefaultController.get("/", (req, res) => {
  res.render("index", {
    title: "hello jade",
    message: "this is a message from server express"
  });
});


module.exports = DefaultController;
