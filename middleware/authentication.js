const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const CreateJwtToken = (payload) => {
  const token = jwt.sign(payload, process.env.SECRET, {
    algorithm: process.env.JWT_ALGORITHM,
  });
  return token;
};

module.exports = CreateJwtToken;
