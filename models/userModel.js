const mongoose = require("mongoose"),
  { Schema } = mongoose,
  Joi = require("joi");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
    },
    image: {
      type: String,
    },
    about: {
      type: String,
    },
    birthday: {
      type: Date,
    },
    savedPins: [{ type: Schema.Types.ObjectId, ref: "Pin" }],
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

userSchema.methods.validateFields = (user) => {
  const joiUserSchema = Joi.object({
    _id: Joi.options({ allowUnknown: true }),
    isAdmin: Joi.options({ allowUnknown: true }),
    birthday: Joi.options({ allowUnknown: true }),
    image: Joi.options({ allowUnknown: true }),
    savedPins: Joi.options({ allowUnknown: true }),
    about: Joi.options({ allowUnknown: true }),
    name: Joi.string().alphanum().min(2).max(30).required(),
    lastName: Joi.string().alphanum().min(2).max(30).required(),
    userName: Joi.string().min(2).max(30).required(),
    email: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: ["com", "net"] },
    }),
    password: Joi.string().required().pattern(new RegExp(`[a-zA-Z0-9]{9}`)),
  });
  return joiUserSchema.validate(user);
};

const User = mongoose.model("User", userSchema);
module.exports = User;
