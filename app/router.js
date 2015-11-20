"use strict";

const express = require("express");
const verifyLogin = require("./util/verify-user-session.js");
const revokeSession = require("./util/revoke-session.js");
const router = express.Router({
  caseSensitive: true
});
const userController = require("./controller/user.js");
const indexController = require("./controller/index.js");

// @domain User page
router.get("/user/index", verifyLogin, userController.showCurrentUser);
router.get("/user/logout", revokeSession, userController.logout);
router.post("/user/login", userController.login);
router.post("/user/registar", userController.createNewUser);

// @domain Top page
router.get("/", indexController.showLandingPage);

module.exports = router;
