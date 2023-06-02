const jwt = require("jsonwebtoken");

const genToken = async (id) => {
  const payload = {id};
  const secretKey = "newKey";
  const token = jwt.sign(payload, secretKey, {expiresIn: "1h"});
  return token;
};

exports.genToken = genToken;
