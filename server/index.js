require("dotenv").config({ path: "./dev.env" });
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");

const { connectToDb } = require("./db/connection");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("combined"));

app.get("/status", function (req, res) {
  res.json({ up: true });
});

app.listen(PORT, async () => {
  try {
    console.log(`App listening on ${PORT}`);
    await connectToDb();
  } catch (err) {
    console.err(err);
  }
});
