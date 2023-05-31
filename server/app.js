const express = require("express");
const router = express.Router();
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

app.use(express.json());

app.use;

// new item route
router.post("/collection/:collectionName/item", async (req, res, next) => {
  const collection = new Collection(); // initialize new collection object
  const name = req.params.collectionName;
  collection.name = name;
  collection.itemName = `Collection number: ${Math.random()}`; // set random name

  collection.itemIsCompleted = false; // set property

  collection.saveItem(); // save collection to database

  res.status(200).json({
    message: "New item was saved",
  });
});

// new collection route
router.post("/collection", async (req, res, next) => {
  const collection = new Collection(); // initialize new collection object
  const data = req.body;

  collection.name = data.name;
  const savedCollectionId = await collection.saveCollection(); // save collection to database
  res.status(200).json({
    message: "Collection was saved",
    id: savedCollectionId,
  });
});

// DEVELOPMENT ROUTE ONLY
// router.delete("/collections/delete-all", (req, res, next) => {
//   const collection = new Collection(); // initialize new collection object
//   collection.deleteAll(); // delete all collections

//   res.status(200).json({
//     message: "All items deleted.",
//   });
// });

// router.delete("/collections/:id", (req, res, next) => {
//   const {id} = req.params.id; // get id from url
//   const collection = new Collection(); // initialize new collection object

//   collection.deleteById(id); // delete a collection object from mongoDB database by its id

//   res.status(200).json({
//     message: "All items deleted.",
//   });
// });

router.get("/collections", async (req, res, next) => {
  const collection = new Collection(); // initialize new collection object
  res.status(200).json({
    message: "all collections retrieved",
    data: await collection.fetchAll(),
  });
});
app.use(router);

app.listen(3000);
