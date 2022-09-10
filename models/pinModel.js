const mongoose = require("mongoose"),
  { Schema } = mongoose,
  Joi = require("joi"),
  bcrypt = require("bcrypt");

const pinSchema = new Schema(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
    },
    image: {
      type: String,
    },
    description: {
      type: String,
    },
    comments: [{ type: Schema.Types.ObjectId, ref: "User" }],
  },
  { timestamps: true }
);

const Pin = mongoose.model("Pin", pinSchema);
module.exports = Pin;
