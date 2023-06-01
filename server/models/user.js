const database = require("../database.js");
const mongoDB = require("mongodb");

class User {
  constructor(email, password, id) {
    this.email = email;
    this.password = password;
    this._id = id;
  }
  async saveNewUser() {
    const db = await database.connectToDatabase();
    const result = await db.collection("users").insertOne({email: this.email, password: this.password});
    this._id = result.insertedId.toString();
    return this;
  }
  async deleteUser() {
    const db = await database.connectToDatabase();
    const result = await db.collection("users").deleteOne({_id: new mongoDB.ObjectId(this._id)});
  }
  async DeleteAllUsers() {
    const db = await database.connectToDatabase();
    const result = await db.collection("users").deleteMany();
  }
}

module.exports = User;
