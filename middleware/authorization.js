const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const config = require("../config/config");

function authorize(allowedRoles) {
  return (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];

    if (!token) {
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .json({ message: "No token provided" });
    }

    jwt.verify(token, config.SECRET, (err, decoded) => {
      if (err) {
        return res
          .status(StatusCodes.FORBIDDEN)
          .json({ message: "Invalid token" });
      }

      if (!allowedRoles.includes(decoded.role.toUpperCase())) {
        return res
          .status(StatusCodes.FORBIDDEN)
          .json({ message: "You are not authorized to access this endpoint" });
      }

      req.user = decoded;
      next();
    });
  };
}

module.exports = authorize;
