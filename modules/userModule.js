const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/userModel");

exports.createUser = (userFields) => {
  return new Promise((resolve, reject) => {
    let { name, lastName, userName, email, password } = userFields;
    const newUser = new User({
      name,
      lastName,
      userName,
      email,
      password,
    });
    let { error } = newUser.validateFields(newUser._doc);
    if (!error) {
      return bcrypt.hash(password, 10).then((hashedPassword) => {
        newUser.password = hashedPassword;
        newUser
          .save()
          .then((user) => {
            resolve(user);
          })
          .catch((error) => {
            reject(error);
          });
      });
    }
    reject(error.details[0].message);
  });
};

exports.loginUser = (userFields) => {
  return new Promise((resolve, reject) => {
    let fetchedUser;
    let { userName, email, password } = userFields;
    User.findOne({ userName, email }).then(async (user) => {
      if (!user) {
        reject("User not found");
      }
      fetchedUser = user;
      await bcrypt
        .compare(password, user.password)
        .then((existUser) => {
          if (!existUser) {
            reject("User not fount");
          }
          const token = jwt.sign(
            { email: fetchedUser.email, userId: fetchedUser._id },
            process.env.SECRET,
            { expiresIn: "1h" }
          );
          resolve({ token, expiresIn: 3600, userId: fetchedUser._id });
        })
        .catch((error) => {
          reject(error);
        });
    });
  });
};
