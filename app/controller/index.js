"use strict";

const indexController = {};
indexController.showLandingPage = function(req, res) {
  res.render("index", {
    title: "hello jade",
    message: "this is a message from server express"
  });
};

module.exports = Object.freeze(indexController);
