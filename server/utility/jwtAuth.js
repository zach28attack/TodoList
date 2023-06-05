const jwt = require("jsonwebtoken");

exports.genToken = async function genToken(id) {
  const payload = {id};
  const secretKey = "newKey";
  const token = jwt.sign(payload, secretKey, {expiresIn: "12h"});
  return token;
};
