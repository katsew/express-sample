"use strict";

const express = require("express");
const router = express.Router({
  caseSensitive: true
});

router.get("/hello", function (req, res) {
  res.render("index", {
    title: "hello jade",
    message: "this is a message from server express",
    test: "this is a test"
  });
});

router.get("/top", function (req, res) {
  res.render("top/index", {
    title: "hello top page",
    message: "this is a message from server express yo!",
    test: "this is a top routing"
  });
});

router.get("/", (req, res) => {
  res.render("index", {
    title: "hello jade",
    message: "this is a message from server express",
    test: "this is a test"
  });
});


module.exports = router;
