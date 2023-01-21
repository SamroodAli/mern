const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const morgan = require("morgan");

dotenv.config({ path: "./dev.env" });

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());

app.use(express.json());

app.use(morgan("combined"));

app.get("/status", function (req, res) {
  res.json({ up: true });
});

app.listen(PORT, () => {
  console.log(`App listening on ${PORT}`);
});
