const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const nameString = require("./mongoCreateEntriesData").nameString;
const priceNumber = require("./mongoCreateEntriesData").priceNumber;
const newRelic = require("newrelic");

const app = express();
const PORT = process.env.PORT || 3000;
const db = require("../db/index.js");

app.use(cors());
app.use(morgan("dev"));
app.use(express.static("dist"));

app.get("/api/products/names", (req, res) => {
  const productId = req.query.name;
  db.getOneByName(productId)
    .then(results => res.send(results))
    .catch(() => res.send("failed"));
});

app.get("/api/products/names/partial", (req, res) => {
  const partialName = req.query.name;
  db.getSomeByPartialName(partialName)
    .then(results => res.send(results))
    .catch(err => res.send(err));
});

app.post("/temp", (req, res) => {
  let longString = "";
  let randomStartIndex1 = 0;
  let randomStartIndex2 = 0;
  let randomStartIndex3 = 0;
  let multiplier = 10;
  // let multiplier = 10000;

  for (let j = 0; j < multiplier; j++) {
    for (let k = 0; k < 1000; k++) {
      randomStartIndex1 = Math.floor(Math.random(0, 186));
      randomStartIndex2 = Math.floor(Math.random(0, 186));
      randomStartIndex3 = Math.floor(Math.random(0, 253));
      longString += `{
    name: ${nameString.slice(
      randomStartIndex1,
      randomStartIndex1 + Math.floor(Math.random(3, 36))
    )},
    price: ${priceNumber[Math.floor(Math.random(0, 101))]},
    bulletOne: ${nameString.slice(
      randomStartIndex2,
      randomStartIndex2 + Math.floor(Math.random(3, 71))
    )},
    bulletTwo: ${nameString.slice(
      randomStartIndex2,
      randomStartIndex2 + Math.floor(Math.random(3, 71))
    )},
    bulletThree: ${nameString.slice(
      randomStartIndex2,
      randomStartIndex2 + Math.floor(Math.random(3, 71))
    )},
    sellerName: ${nameString.slice(
      randomStartIndex1 + 35,
      randomStartIndex1 + 35 + Math.floor(Math.random(3, 36))
    )},
    description: ${nameString.slice(
      randomStartIndex3,
      randomStartIndex3 + Math.floor(Math.random(3, 255))
    )},
  },`;
      longString = longString.slice(0, longString.length - 1);
    }
    Desc.insert([longString]);
    longString = "";
  }
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
