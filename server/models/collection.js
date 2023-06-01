const database = require("../database.js");
const mongoDB = require("mongodb");

class Collection {
  constructor(id, name, items, itemName, itemIsCompleted) {
    this._id = id;
    this.name = name;
    this.items = items;
    this.itemIsCompleted = itemIsCompleted;
    this.itemName = itemName;
  }
  async saveCollection() {
    try {
      const db = await database.connectToDatabase();
      const result = await db.collection("collections").insertOne({name: this.name, items: []});
      return result.insertedId.toString(); // Retrieve the saved object's id
    } catch (error) {
      console.error("Error caught", error);
    }
  }

  async saveItem() {
    try {
      const db = await database.connectToDatabase();
      db.collection("collections").updateOne(
        {
          _id: new mongoDB.ObjectId(this._id),
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
      db.collection("collections").deleteOne({_id: new mongoDB.ObjectId(this._id)});
    } catch (error) {
      console.error(error);
    }
  }
  async deleteItemByIndex(index) {
    try {
      const db = await database.connectToDatabase();
      const result = await db.collection("collections").updateOne(
        {_id: new mongoDB.ObjectId(this._id)},
        {
          $set: {[`items.${index}`]: ""},
        }
      );
      return 200;
    } catch (error) {
      console.error(error);
      return 500;
    }
  }

  async fetchAll() {
    const db = await database.connectToDatabase();
    return (await db.collection("collections").find().toArray()).reverse();
  }
  async deleteAll() {
    const db = await database.connectToDatabase();
    db.collection("collections").deleteMany({});
  }
}
module.exports = Collection;
