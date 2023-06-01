const database = require("../database.js");
const mongoDB = require("mongodb");

class User {
  constructor(email, password, passwordConfirmation) {
    this.email = email;
    this.password = password;
    this.passwordConfirmation = passwordConfirmation;
  }
  async saveNewUser() {
    const db = await database.connectToDatabase();
    const result = await db.collection("users").insertOne({email: this.email, password: this.password});
    console.log("USER:", result);
    return result.insertedId.toString();
  }
}

module.exports = User;
