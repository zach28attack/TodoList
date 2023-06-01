const User = require("../models/user.js");

exports.saveNewUser = async (req, res, next) => {
  const data = req.body;
  const user = new User();
  user.email = data.email;
  user.password = data.password;
  if (user.password === data.passwordConfirmation) {
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
