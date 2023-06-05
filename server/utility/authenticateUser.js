const jwt = require("jsonwebtoken");
const database = require("../utility/database.js");

module.exports = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  // extract token from auth header
  let decodedToken;
  // initialize var

  try {
    if (token) {
      decodedToken = jwt.verify(token, "newKey");
      // decodes token, if invalid token it will throw error
      const db = await database.connectToDatabase();
      const result = await db.collection("tokens").findOne({userId: decodedToken.id, token: token, revoked: false});
      // check if token is valid by 'revoked:false' status
      if (result) {
        // if token isn't revoked then set req data
        req.userId = decodedToken.id;
        req.token = token;
        next();
      } else {
        const error = new Error("Token is expired");
        error.statusCode = 400;
        console.error(error);
      }
    }
  } catch (error) {
    error.statusCode = 500;
    console.error(error);
  }
  if (!decodedToken) {
    const error = new Error("Not Authenticated");
    error.statusCode = 401;
    console.error(error);
  }
};
