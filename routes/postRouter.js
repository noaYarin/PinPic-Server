const express = require("express"),
  postRouter = express.Router(),
  checkAuthMiddleware = require("../middlewares/check-auth"),
  postController = require("../controllers/postController");

postRouter.get("/allPosts", postController.getPosts);
postRouter.get("/getPost/:id", checkAuthMiddleware, postController.getPost);
postRouter.post("/createPost", checkAuthMiddleware, postController.createPost);
postRouter.put(
  "/updatePost/:id",
  checkAuthMiddleware,
  postController.updatePost
);
postRouter.delete(
  "/deletePost/:id",
  checkAuthMiddleware,
  postController.deletePost
);
module.exports = postRouter;
