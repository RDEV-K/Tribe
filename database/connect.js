const { Sequelize } = require("sequelize");
const config = require("../config/config");

const db = new Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD, {
  host: config.DB_HOST,
  dialect: "postgres",
  logging: false,
  port: 5050,
  user: "postgres",
  password: "evils2",
  database: "task",
  // dialectOptions: {
  //   ssl: {
  //     require: true,
  //     rejectUnauthorized: false, // If the server's certificate is self-signed or not in a trusted CA, set this to false
  //   },
  // },
});

module.exports = db;
