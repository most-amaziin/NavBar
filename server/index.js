const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const db = require('../db/index.js');


app.use(cors());
app.use(morgan('dev'));
app.use(express.static('dist'));


app.get('/api/products/names', (req, res) => {
  const productId = req.query.name;
  db.getOneByName(productId)
    .then(results => res.send(results))
    .catch(() => res.send('failed'));
});

app.get('/api/products/names/partial', (req, res) => {
  const partialName = req.query.name;
  db.getSomeByPartialName(partialName)
    .then(results => res.send(results))
    .catch(err => res.send(err));
});

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
