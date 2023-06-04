const express = require("express");
const router = express.Router();
const app = express();
const ItemsController = require("./controllers/items.js");
const UsersController = require("./controllers/users.js");
const CollectionsController = require("./controllers/collections.js");
const authenticateUser = require("./utility/authenticateUser.js");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://127.0.0.1:5173");
  // the * gives access every url, or you can specify multiple urls separated with commas
  res.setHeader("Access-Control-Allow-Methods", "GET, PUT, POST, PATCH, DELETE");
  //you need to specify which methods should be available
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // allow headers
  next();
});

// parse body json
app.use(express.json());

// new session route
router.post("/user/login", UsersController.login);

// delete user cookies route
router.get("/user/logout", authenticateUser, UsersController.logout);

// delete user by id
router.delete("/user/:id", UsersController.deleteUser);

// new user route
router.post("/user", UsersController.signup);

// new item route
router.post("/collection/:collectionId/item", ItemsController.saveNewItem);

// delete item route
router.delete("/collection/:collectionId/item/:itemIndex", ItemsController.deleteItem);

// new collection route
router.post("/collection", CollectionsController.saveNewCollection);

// get all collections route
router.get("/collections", CollectionsController.getAllCollections);

// DEVELOPMENT ONLY
app.use("/delete-all-users", UsersController.deleteAll);

app.use(router);

app.listen(3000);
