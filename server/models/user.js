const database = require("../utility/database.js");
const mongoDB = require("mongodb");
const {genToken} = require("../utility/jwtAuth.js");

class User {
  constructor(email, password, id, token) {
    this.email = email;
    this.password = password;
    this._id = id;
    this.token = token;
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

  async login() {
    try {
      const db = await database.connectToDatabase();
      const loginResult = await db.collection("users").findOne({email: this.email, password: this.password});
      // if user exists and parameters match will return with userId
      this._id = loginResult._id.toString();
      // set user.id with result
      this.token = await genToken(this._id);
      // generate an auth token with user.id
      db.collection("tokens").insertOne({token: this.token, userId: this._id, revoked: false, createdAt: new Date()});
      // save token to db
      return this;
    } catch (error) {
      console.error(error);
    }
  }

  async logout() {
    const db = await database.connectToDatabase();
    db.collection("tokens").updateOne({revoked: false, token: this.token, userId: this._id}, {$set: {revoked: true}});
  }

  async update() {
    try {
      const db = await database.connectToDatabase();
      const result = await db
        .collection("users")
        .updateOne({_id: new mongoDB.ObjectId(this._id)}, {$set: {email: this.email, password: this.password}});
      return result;
    } catch (error) {
      console.error(error);
    }
  }

  //
  //
  // DEVELOPMENT ONLY
  async DeleteAllUsers() {
    const db = await database.connectToDatabase();
    const result = await db.collection("users").deleteMany();
  }
  //
  //
  //
}

module.exports = User;
