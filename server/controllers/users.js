const User = require("../models/user.js");

exports.signup = async (req, res, next) => {
  const {email, password, passwordConfirmation} = req.body;
  const user = new User();
  user.email = email;
  user.password = password;
  if (user.password === passwordConfirmation) {
    user.saveNewUser();
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

// TODO: Add bcrypt encryption to password
exports.login = async (req, res, next) => {
  try {
    const {email, password} = req.body;
    const user = new User();
    user.email = email;
    user.password = password;

    if (user.email && user.password) {
      await user.login();
      res.status(200).json({
        message: "Login successful",
        id: user._id,
        token: user.token,
      });
    } else {
      res.status(400).json({message: "Missing email or password"});
    }
  } catch (error) {
    res.status(500).json({message: "An error occurred"});
  }
};

exports.logout = async (req, res, next) => {};

exports.deleteAll = async (req, res, next) => {
  const user = new User();
  user.DeleteAllUsers();
};
