const express = require("express");
const app = express();
const Collection = require("./models/collection.js");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // the * gives access every url, or you can specify multiple urls separated with commas

  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
  //you need to specify which methods should be available

  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // allow headers

  next();
});
app.use("/", (req, res, next) => {
  console.log("attempting database connection");

  next();
});

app.use("/collection/new", async (req, res, next) => {
  // console.log("databse:", await db);

  const collection = new Collection();

  collection.name = "School";
  collection.isCompleted = false;
  console.log(collection);

  collection.save(db); // Assuming save() is an asynchronous operation, use `await`
  res.status(200).send("Collection saved successfully");
});

app.listen(3000);
