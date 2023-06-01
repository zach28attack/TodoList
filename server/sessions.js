const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

const configureSessions = (app) => {
  const store = new MongoDBStore({
    uri: "mongodb+srv://zach28attack:MongoDBPassword@cluster0.im0uft8.mongodb.net/?retryWrites=true&w=majority",
    collection: "sessions",
  });

  app.use(
    session({
      secret: "55070",
      resave: false,
      saveUninitialized: false,
      store: store,
    })
  );
};

module.exports = configureSessions;
