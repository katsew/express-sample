"use strict";
let __CONST__ = {
  PORT: process.env.PORT,
  ENV: process.env.NODE_ENV,
  MONGODB_HOSTNAME: process.env.MONGODB_HOSTNAME,
  MONGODB_PORT: process.env.MONGODB_PORT
};

const CONSTANTS = Object.freeze(__CONST__);
module.exports = CONSTANTS;
