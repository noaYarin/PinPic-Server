const Comment = require("../models/commentModel");

exports.getComments = () => {
  return new Promise(async (resolve, reject) => {
    let comments = await Comment.find();
    comments ? resolve(comments) : reject("No comments");
  });
};
exports.getComment = (commentId) => {
  return new Promise(async (resolve, reject) => {
    let comment = await Comment.findOne({ _id: commentId });
    comment ? resolve(comment) : reject("Comment not found");
  });
};
exports.createComment = (commentFields) => {
  let { description } = commentFields;
  return new Promise((resolve, reject) => {
    let newComment = new Comment({
      description,
    });
    newComment
      .save()
      .then((comment) => resolve(comment))
      .catch((error) => reject(error));
  });
};
exports.updateComment = (commentId, commentFields) => {
  let { description } = commentFields;
  return new Promise(async (resolve, reject) => {
    let updatedComment = await Comment.findByIdAndUpdate(
      { _id: commentId },
      {
        $set: {
          description,
        },
      },
      { new: true }
    );
    updatedComment ? resolve(updatedComment) : reject("Comment not updated");
  });
};
exports.deleteComment = (commentId) => {
  return new Promise(async (resolve, reject) => {
    let deletedComment = await Comment.deleteOne({ _id: commentId });
    deletedComment ? resolve(deletedComment) : reject("Comment not deleted");
  });
};
