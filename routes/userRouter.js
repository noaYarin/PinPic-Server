const express = require("express"),
  userRouter = express.Router(),
  userController = require("../controllers/userController");

userRouter.post("/signUp", userController.createUser);
userRouter.post("/signIn", userController.loginUser);

module.exports = userRouter;
