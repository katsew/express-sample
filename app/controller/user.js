"use strict";

const express = require("express");
const UserController = express.Router({
  caseSensitive: true
});
const UserModel = require("../model/user.js");

UserController.get("/user/:id", (req, res) => {
  res.render("user/show", {
    title: "Show specify user",
    message: "this is a message from server express",
  });
});

UserController.get("/user/index", (req, res) => {
  res.render("user/index", {
    title: "User top page",
    message: "this is a message from server express",
  });
});

UserController.post("/user/create", (req, res) => {
  let newUser = new UserModel({
    name: req.body.user_name
  });
  newUser.save((err) => {
    if (err) {
      console.log(err);
      return res.redirect("back");
    }
    return res.render("user/create", {
      title: "Create new user done.",
      message: "this is a message from server express",
      user_name: req.body.user_name
    });
  });
});

module.exports = UserController;
