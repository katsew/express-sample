"use strict";

const morgan = require("morgan");
const express = require("express");
const CONSTANTS = require("./app/constants.js");
const router = require("./app/router.js");
const app = express();

app.set("views", "./views");
app.set("view engine", "jade");

app.use(require("stylus").middleware({
  src: `${__dirname}/assets/stylus`,
  dest: `${__dirname}/assets/css`,
  compress: true,
  sourcemap: true
}));
app.use(router);
app.use(express.static("assets"));
app.use(morgan("combined"));

app.listen(CONSTANTS.PORT);
