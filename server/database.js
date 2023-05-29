const MongoDB = require("mongodb");
const MongoClient = MongoDB.MongoClient;

let db;
async function connectToDatabase() {
  const url = "mongodb+srv://zach28attack:MongoDBPassword@cluster0.im0uft8.mongodb.net/?retryWrites=true&w=majority";
  try {
    const client = await MongoClient.connect(url);
    db = client.db();
    console.log("connected to database");
    return db;
  } catch (error) {
    console.error("Error caught:", error);
  }
}

exports.connectToDatabase = connectToDatabase;
