"use strict";
let __CONST__ = {
  PORT: process.env.PORT,
  ENV: process.env.NODE_ENV,
  MONGODB_HOSTNAME: process.env.DB_PORT_27017_TCP_ADDR,
  MONGODB_PORT: process.env.DB_PORT_27017_TCP_PORT
};

const CONSTANTS = Object.freeze(__CONST__);
module.exports = CONSTANTS;
