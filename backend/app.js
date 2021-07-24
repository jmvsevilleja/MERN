// console.log('Hello World!!');

const express = require('express');
const app = express();

// get variable in .env file
require('dotenv/config');

const api = process.env.API_URL;

app.get(api + '/products', (req, res) => {
  res.send('Hello API');
})

app.listen(3000, () => {
  console.log('server is running localhost:3000');
})