"use strict";

const express = require("express");
const UserController = express.Router({
  caseSensitive: true
});
const UserModel = require("../model/user.js");

UserController.get("/user/index", (req, res) => {

  console.log("---- user mypage ----");
  console.log(req.session);
  if (req.session.user !== "" && req.session.user != null) {
    UserModel.find({mail: req.session.user}, (err, result) => {
      if (err) {
        console.log("error occured while user login");
        console.log(err);
        res.redirect("/");
      }
      if (result === "") {
        console.log("No User found when user try to login");
        res.redirect("/");
      } else {
        res.render("user/index", {
          me: true,
          title: `Hello, ${result[0].user_name}.`,
          message: "This is your page"
        });
      }
    });
  } else {
    console.log("There is no session!!!");
    res.redirect("/");
  }
});

UserController.post("/user/login", (req, res) => {
  console.log(req.body);
  let pass = req.body.password;
  let mail = req.body.user_email;
  let query = {
    password: pass,
    mail: mail
  };
  UserModel.find(query, (err, result) => {

    console.log("--- query result ---");
    console.log(result);
    if (err) {
      console.log(err);
      res.redirect("/");
    }
    if (result === "") {
      console.log("failed to get data");
      res.redirect("/");
    } else {
      req.session.user = result[0].mail;
      console.log(req.session);
      res.redirect("/user/index");
    }
  });
});

UserController.get("/user/logout", (req, res) => {
  console.log("--- user logout ---");
  req.session.destroy();
  console.log(req.session);
  res.redirect("/");
});

UserController.post("/user/registar", (req, res) => {

  console.log(req.body);
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
      console.error(err);
      res.redirect("/");
    } else {
      res.render("user/registar", {
        title: "Create new user done.",
        message: "this is a message from server express",
        user_name: user_name
      });
    }
  });
});

module.exports = UserController;
