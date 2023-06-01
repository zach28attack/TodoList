const express = require("express");
const router = express.Router();
const app = express();
const Collection = require("./models/collection.js");
const User = require("./models/user.js");
const ItemsController = require("./controllers/items.js");
const UsersController = require("./controllers/users.js");
const CollectionsController = require("./controllers/collections.js");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  // the * gives access every url, or you can specify multiple urls separated with commas
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
  //you need to specify which methods should be available
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // allow headers
  next();
});

// parse body json
app.use(express.json());

// new user route
app.post("/user", UsersController.saveNewUser);

// new item route
router.post("/collection/:collectionId/item", ItemsController.saveNewItem);

// delete item route
router.delete("/collection/:collectionId/item/:itemIndex", ItemsController.deleteItem);

// new collection route
router.post("/collection", CollectionsController.saveNewCollection);

// get all collections route
router.get("/collections", CollectionsController.getAllCollections);
app.use(router);

app.listen(3000);
