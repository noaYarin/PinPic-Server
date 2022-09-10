const mongoose = require("mongoose"),
  { Schema } = mongoose,
  Joi = require("joi"),
  bcrypt = require("bcrypt");

const userSchema = new Schema(
  {
    name: {
      type: String,
    },
    lastName: {
      type: String,
    },
    userName: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    image: {
      type: String,
    },
    about: {
      type: String,
    },
    savedPins: [{ type: Schema.Types.ObjectId, ref: "Pin" }],
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
