const express = require("express"),
  commentRouter = express.Router(),
  checkAuthMiddleware = require("../middlewares/check-auth"),
  commentController = require("../controllers/commentController");

commentRouter.get("/allComments", commentController.getComments);
commentRouter.get(
  "/getComment/:id",
  checkAuthMiddleware,
  commentController.getComment
);
commentRouter.post(
  "/createComment",
  checkAuthMiddleware,
  commentController.createComment
);
commentRouter.put(
  "/updateComment/:id",
  checkAuthMiddleware,
  commentController.updateComment
);
commentRouter.delete(
  "/deleteComment/:id",
  checkAuthMiddleware,
  commentController.deleteComment
);

module.exports = commentRouter;
