const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  let decodedToken;
  try {
    if (token) {
      decodedToken = jwt.verify(token, "newKey");
      console.log("Decoded token:", decodedToken);
    }
  } catch (error) {
    error.statusCode = 500;
    throw error;
  }
  if (!decodedToken) {
    const error = new Error("Not Authenticated");
    error.statusCode = 401;
    throw error;
  }
  req.userId = decodedToken.id;
  next();
};
