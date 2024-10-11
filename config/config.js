const dotenv = require("dotenv");

if (process.env.NODE_ENV !== "test" || process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const config = {
  DB_NAME: process.env.DB_NAME,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_HOST: process.env.DB_HOST,
  SERVER_PORT: process.env.SERVER_PORT,
  MANAGERIAL_ROLES: process.env.MANAGERIAL_ROLES,
  USER_ROLES: process.env.USER_ROLES,
  SECRET: process.env.SECRET,
  JWT_ALGORITHM: process.env.JWT_ALGORITHM,
  JWT_EXPIRESIN: process.env.JWT_EXPIRESIN,
};

module.exports = config;
