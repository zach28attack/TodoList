const Collection = require("../models/collection.js");

exports.saveNewItem = async (req, res, next) => {
  const collection = new Collection(); // initialize new collection object
  const id = req.params.collectionId;
  const itemName = req.body.itemName;

  collection.id = id;
  collection.itemName = itemName; // set random name
  collection.itemIsCompleted = false; // set property
  collection.saveItem(); // save collection to database

  res.status(200).json({
    message: "New item was saved",
  });
};

exports.deleteItem = async (req, res, next) => {
  const collection = new Collection(); // initialize new collection object
  const id = req.params.collectionId;
  const itemIndex = req.params.itemIndex;

  collection.id = id;
  const status = await collection.deleteItemByIndex(itemIndex);
  if (status === 200) {
    res.status(200).json({
      message: "Item was deleted",
    });
  } else {
    res.status(500).json({
      message: "Item was not deleted",
    });
  }
};
