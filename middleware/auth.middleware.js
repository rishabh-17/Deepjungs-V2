const jwt = require("jsonwebtoken");
const User = require("../db/models/User");

/* This code exports a middleware function that is used for authentication in an application. */
module.exports = (req, res, next) => {
  try {
    const token = req.header("authentication");
    const user = jwt.verify(token, "secretKey");
    User.findById(user._id).then((user) => {
      req.user = user;
      next();
    });
  } catch (error) {
    return res.status(401).json({ success: false });
  }
};
