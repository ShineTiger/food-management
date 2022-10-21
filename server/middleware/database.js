const { MongoClient } = require("mongodb");

const database = {};
const uri = process.env.DB_URI;
database.client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
database.client.connect().then(db => console.log("DB connected."));

database.db = database.client.db(process.env.DB_NAME);
database.session = database.db.collection(process.env.DB_COLL_SESSION);
database.foodData = database.db.collection(process.env.DB_COLL_FOOD);
database.userData = database.db.collection(process.env.DB_COLL_USER);
database.userMeal = database.db.collection(process.env.DB_COLL_USERMEAL);

module.exports = database;