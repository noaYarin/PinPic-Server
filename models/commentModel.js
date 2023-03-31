const mongoose = require("mongoose"),
  { Schema } = mongoose;

const commentSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    description: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;
