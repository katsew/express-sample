"use strict";

const morgan = require("morgan");
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const uuid = require("node-uuid");
const MongoStore = require("connect-mongo")(session);
const CONSTANTS = require("./app/constants.js");
const defaultRouter = require("./app/controller/default.js");
const userController = require("./app/controller/user.js");
const app = express();

// Front-end Engines
app.set("views", "./views");
app.set("view engine", "jade");
app.use(require("stylus").middleware({
  src: `${__dirname}/assets/stylus`,
  dest: `${__dirname}/assets/css`,
  compress: true,
  sourcemap: true
}));

// Registar middleware
app.use(morgan("combined"));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
  genid(req) {
    return uuid.v4();
  },
  secret: "keyvalue cat",
  resave: false,
  saveUninitialized: false,
  store: new MongoStore({
    db: "session",
    host: CONSTANTS.MONGODB_HOSTNAME,
    clear_interval: 60 * 60
  }),
  cookie: {
    httpOnly: false,
    maxAge: 60 * 60 * 1000
  }
}));

// Registar router
app.use(defaultRouter);
app.use(userController);
app.use(express.static("assets"));

// Start application listen port
app.listen(CONSTANTS.PORT);
