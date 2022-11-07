const session = require("express-session");
const MongoStore = require("connect-mongo");

const mySession = session({
  store: new MongoStore({
    mongoUrl:
      "mongodb+srv://ABurga:g5kNcaBKcEodAE83@cluster0.4upmc2o.mongodb.net/?retryWrites=true&w=majority",
    advancedOptions: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
    ttl: 60000,
  }),
  secret: "orwell",
  resave: false,
  saveUninitialized: true,
});

module.exports = mySession;
