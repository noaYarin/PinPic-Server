const Post = require("../models/postModel");

exports.getPosts = () => {
  return new Promise(async (resolve, reject) => {
    let posts = await Post.find();
    posts ? resolve(posts) : reject("No posts");
  });
};
exports.getPost = (postId) => {
  return new Promise(async (resolve, reject) => {
    let post = await Post.findOne({ _id: postId });
    post ? resolve(post) : reject("Post not found");
  });
};
exports.createPost = (postFields) => {
  let { title, description, image } = postFields;
  return new Promise((resolve, reject) => {
    let newPost = new Post({
      title,
      description,
      image,
    });
    let { error } = newPost.validateFields(newPost._doc);
    if (!error) {
      newPost
        .save()
        .then((post) => resolve(post))
        .catch((error) => reject(error));
    }
    reject(error.details[0].message);
  });
};
exports.updatePost = (postId, postFields) => {
  let { title, description, image } = postFields;
  return new Promise(async (resolve, reject) => {
    let updatedPost = await Post.findByIdAndUpdate(
      { _id: postId },
      {
        $set: {
          title,
          description,
          image,
        },
      },
      { new: true }
    );
    updatedPost ? resolve(updatedPost) : reject("Post not updated");
  });
};
exports.deletePost = (postId) => {
  return new Promise((resolve, reject) => {
    let deletedPost = Post.deleteOne({ _id: postId });
    deletedPost ? resolve(deletedPost) : reject("Post not deleted");
  });
};
