const jwt = require("jsonwebtoken");
const logger = require("../services/logger");
module.exports = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decodedToken = jwt.verify(token, process.env.SECRET);
    req.userData = { email: decodedToken.email, userId: decodedToken.userId };
    next();
  } catch (error) {
    logger.error(JSON.stringify(error));
    res.status(401).json({ message: "You are not authenticated!", error });
  }
};
