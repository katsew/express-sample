"use strict";

const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");
const CONSTANTS = require("./app/constants.js");
const defaultRouter = require("./app/controller/default.js");
const userController = require("./app/controller/user.js");
const app = express();

app.set("views", "./views");
app.set("view engine", "jade");

app.use(require("stylus").middleware({
  src: `${__dirname}/assets/stylus`,
  dest: `${__dirname}/assets/css`,
  compress: true,
  sourcemap: true
}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(defaultRouter);
app.use(userController);
app.use(express.static("assets"));
app.use(morgan("combined"));

app.listen(CONSTANTS.PORT);
