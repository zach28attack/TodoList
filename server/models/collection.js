const database = require("../database.js");
const mongoDB = require("mongodb");

class Collection {
  constructor(id, name, itemName, itemIsCompleted) {
    this.id = id;
    this.name = name;
    this.itemIsCompleted = itemIsCompleted;
    this.itemName = itemName;
  }
  async saveCollection() {
    try {
      const db = await database.connectToDatabase();
      db.collection("collections").insertOne({name: this.name, items: [{name: "", itemIsCompleted: undefined}]});
    } catch (error) {
      console.error("Error caught", error);
    }
  }

  async saveItem() {
    try {
      const db = await database.connectToDatabase();
      db.collection("collections").updateOne(
        {
          _id: new mongoDB.ObjectId(this.id),
        },
        {
          $push: {items: {name: this.itemName, isCompleted: this.itemIsCompleted}},
        }
      );
    } catch (error) {
      console.error("Error caught", error);
    }
  }
  async deleteCollectionById() {
    try {
      const db = await database.connectToDatabase();
      db.collection("collections").deleteOne({_id: new mongoDB.ObjectId(this.id)});
    } catch (error) {
      console.error(error);
    }
  }
  async deleteItemById() {
    try {
      const db = await database.connectToDatabase();
      db.collection("collections")
        .findOne({_id: new mongoDB.ObjectId(this.id)})
        .updateOne({_id: new mongoDB.ObjectId(this.id)}, {$pull: {items: {name: this.name}}});
    } catch (error) {
      console.error(error);
    }
  }

  async fetchAll() {
    const db = await database.connectToDatabase();
    return db.collection("collections").find().toArray();
  }
  async deleteAll() {
    const db = await database.connectToDatabase();
    db.collection("collections").deleteMany({});
  }
}
module.exports = Collection;
