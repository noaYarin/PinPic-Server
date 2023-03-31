const mongoose = require("mongoose"),
  { Schema } = mongoose,
  Joi = require("joi");

const postSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
      required: true,
    },
    comments: [{ type: Schema.Types.ObjectId, ref: "Comment" }],
  },
  { timestamps: true }
);

postSchema.methods.validateFields = (postFields) => {
  const joiPostSchema = Joi.object({
    _id: Joi.options({ allowUnknown: true }),
    image: Joi.options({ allowUnknown: true }),
    title: Joi.string().min(5).max(30).required(),
    description: Joi.string().min(10).max(100).required(),
    comments: Joi.options({ allowUnknown: true }),
  });
  return joiPostSchema.validate(postFields);
};

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
