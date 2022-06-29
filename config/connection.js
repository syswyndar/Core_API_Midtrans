const { MongoClient } = require("mongodb");

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);
let db;

const connect = () => {
  return client
    .connect()
    .then(() => {
      db = client.db("LearningMidtrans");
    })
    .catch((err) => {
      console.log(err);
    });
};

const database = () => {
  return db;
};

module.exports = {
  connect,
  database,
};
