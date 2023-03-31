const logger = require("../services/logger");
const postModule = require("../modules/postModule");

exports.getPosts = (req, res, next) => {
  postModule
    .getPosts()
    .then((posts) => {
      res.status(200).json({
        posts,
      });
    })
    .catch((error) => {
      logger.error(JSON.stringify(error));
      res.status(400).json(error);
    });
};

exports.getPost = (req, res, next) => {
  postModule
    .getPost(req.params.id)
    .then((post) => {
      res.status(200).json({
        post,
      });
    })
    .catch((error) => {
      logger.error(JSON.stringify(error));
      res.status(400).json(error);
    });
};

exports.createPost = (req, res, next) => {
  postModule
    .createPost(req.body)
    .then((post) => {
      res.status(200).json({
        post,
      });
    })
    .catch((error) => {
      logger.error(JSON.stringify(error));
      res.status(400).json(error);
    });
};

exports.updatePost = (req, res, next) => {
  postModule
    .updatePost(req.params.id, req.body)
    .then((updatedPost) => {
      res.status(200).json({
        updatedPost,
      });
    })
    .catch((error) => {
      logger.error(JSON.stringify(error));
      res.status(400).json(error);
    });
};

exports.deletePost = (req, res, next) => {
  postModule
    .deletePost(req.params.id)
    .then((deletedPost) => {
      res.status(200).json({
        deletedPost,
      });
    })
    .catch((error) => {
      logger.error(JSON.stringify(error));
      res.status(400).json(error);
    });
};
