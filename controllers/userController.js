const logger = require("../services/logger");
const userModule = require("../modules/userModule");

exports.createUser = (req, res, next) => {
  userModule
    .createUser(req.body)
    .then((user) => {
      res.status(201).json({
        message: "User created",
        user,
      });
    })
    .catch((error) => {
      logger.error(JSON.stringify(error));
      res.status(500).json({
        message: "Invalid authentication credentials!",
      });
    });
};

exports.loginUser = (req, res, next) => {
  userModule
    .loginUser(req.body)
    .then((result) => {
      res.status(201).json({
        result,
      });
    })
    .catch((error) => {
      logger.error(JSON.stringify(error));
      return res.status(401).json({
        message: "Auth failed",
      });
    });
};
