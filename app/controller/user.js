"use strict";

const express = require("express");
const UserController = express.Router({
  caseSensitive: true
});
const UserModel = require("../model/user.js");
const userController = {};

userController.showCurrentUser = function(req, res) {
  UserModel.find({mail: req.session.user}, (err, result) => {
    if (err) {
      res.redirect("/");
    }
    if (result === "") {
      res.redirect("/");
    } else {
      res.render("user/index", {
        me: true,
        title: `Hello, ${result[0].user_name}.`,
        message: "This is your page"
      });
    }
  });
};

userController.login = function(req, res) {
  let pass = req.body.password;
  let mail = req.body.user_email;
  let query = {
    password: pass,
    mail: mail
  };
  UserModel.find(query, (err, result) => {
    if (err) {
      res.redirect("/");
    }
    if (result === "") {
      res.redirect("/");
    } else {
      req.session.user = result[0].mail;
      res.redirect("/user/index");
    }
  });
};

userController.logout = function (req, res) {
  res.redirect("/");
};

userController.createNewUser = function (req, res) {
  let pass = req.body.password;
  let user_name = req.body.user_name;
  let mail = req.body.user_email;
  if (pass !== req.body.confirm) {
    res.redirect("/");
  }
  let newUser = new UserModel({
    user_name: user_name,
    password: pass,
    mail: mail
  });
  newUser.save((err) => {
    if (err) {
      res.redirect("/");
    } else {
      res.render("user/registar", {
        title: "Create new user done.",
        message: "this is a message from server express",
        user_name: user_name
      });
    }
  });
};

module.exports = Object.freeze(userController);
