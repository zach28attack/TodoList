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

exports.logout = async (req, res, next) => {
  try {
    const user = new User();
    user._id = req.userId;
    user.token = req.token;
    user.logout();
    res.status(200).json({
      message: "Logout successful",
    });
  } catch (error) {
    res.status(500).json({
      message: "Logout failed",
    });
    throw error;
  }
};

exports.edit = async (req, res, next) => {
  try {
    const user = new User();
    user._id = req.params.id;
    user.email = req.body.email;
    user.password = req.body.password;
    if (user.password === req.body.passwordConfirmation) {
      const result = await user.update();
      console.log(result);
      res.status(200).json({
        message: "user updated",
      });
    } else {
      res.status(401).json({
        message: "Passwords dont match",
      });
    }
  } catch (error) {
    res.status(500).json({
      message: "user not updated",
    });
  }
};

exports.deleteAll = async (req, res, next) => {
  const user = new User();
  user.DeleteAllUsers();
};
