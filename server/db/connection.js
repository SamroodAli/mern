const { MongoClient } = require("mongodb");
const DATABASE_URI = process.env.DATABASE_URI;

console.log(DATABASE_URI);
const client = new MongoClient(DATABASE_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connectToDb(callback) {
  await client.connect();
  console.log("successfully connected to database");
  return client.db("mern");
}

module.exports = {
  connectToDb,
};
