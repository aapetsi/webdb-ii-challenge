require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());

// load database
const db = require('./data/db-config');

db('cars')
  .where({ id: 1 })
  .then(car => console.log(car));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
