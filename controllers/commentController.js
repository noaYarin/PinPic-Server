const logger = require("../services/logger");
const commentModule = require("../modules/commentModule");

exports.getComments = (req, res, next) => {
  commentModule
    .getComment()
    .then((comments) => {
      res.status(200).json({
        comments,
      });
    })
    .catch((error) => {
      logger.error(JSON.stringify(error));
      res.status(400).json(error);
    });
};

exports.getComment = (req, res, next) => {
  commentModule
    .getComment(req.params.id)
    .then((comment) => {
      res.status(200).json({
        comment,
      });
    })
    .catch((error) => {
      logger.error(JSON.stringify(error));
      res.status(400).json(error);
    });
};

exports.createComment = (req, res, next) => {
  commentModule
    .createComment(req.body)
    .then((comment) => {
      res.status(200).json({
        comment,
      });
    })
    .catch((error) => {
      logger.error(JSON.stringify(error));
      res.status(400).json(error);
    });
};

exports.updateComment = (req, res, next) => {
  commentModule
    .updateComment(req.params.id, req.body)
    .then((updatedComment) => {
      res.status(200).json({
        updatedComment,
      });
    })
    .catch((error) => {
      logger.error(JSON.stringify(error));
      res.status(400).json(error);
    });
};

exports.deleteComment = (req, res, next) => {
  commentModule
    .deleteComment(req.params.id)
    .then((deletedComment) => {
      res.status(200).json({
        deletedComment,
      });
    })
    .catch((error) => {
      logger.error(JSON.stringify(error));
      res.status(400).json(error);
    });
};
