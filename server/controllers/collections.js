const Collection = require("../models/collection.js");

exports.saveNewCollection = async (req, res, next) => {
  const data = req.body;
  const collection = new Collection(); // initialize new collection object
  collection.name = data.name;
  collection.userId = req.userId;
  const savedCollectionId = await collection.saveCollection(); // save collection to database
  res.status(200).json({
    message: "Collection was saved",
    id: savedCollectionId,
  });
};

exports.getAllCollections = async (req, res, next) => {
  const collection = new Collection(); // initialize new collection object
  collection.userId = req.userId;
  const allCollections = await collection.fetchAll();
  res.status(200).json({
    message: "all collections retrieved",
    data: allCollections,
  });
};
