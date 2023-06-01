const User = require("../models/user.js");

exports.signup = async (req, res, next) => {
  const {email, password, passwordConfirmation} = req.body;
  const user = new User();
  user.email = email;
  user.password = password;
  if (user.password === passwordConfirmation) {
    const newUser = await user.saveNewUser();
    req.session.user = newUser;
    res.status(200).json({
      message: "new user saved",
    });
  } else {
    res.status(400).json({
      message: "User not saved",
    });
  }
};

exports.deleteUser = async (req, res, next) => {
  const user = new User();
  user.id = req.body.userId;
  user.deleteUser;
};

exports.login = async (req, res, next) => {
  const user = new User();
  const {email, password} = req.body;
  user.email = email;
  user.password = password;
  if (user.email && user.password) {
    user.login();
  }
};

exports.logout = async (req, res, next) => {};

exports.deleteAll = async (req, res, next) => {
  const user = new User();
  user.DeleteAllUsers();
};
