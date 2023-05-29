const database = require("../database.js");

class Collection {
  constructor(name, isCompleted) {
    this.name = name;
    this.isCompleted = isCompleted;
  }
  async save() {
    const db = database.connectToDatabase();

    db.collection("collections").insertOne({name: this.name, isCompleted: this.isCompleted});
    console.log("saved");
  }
  static fetchAll() {
    return db.collection("collections").find().toArray();
  }
}
module.exports = Collection;
