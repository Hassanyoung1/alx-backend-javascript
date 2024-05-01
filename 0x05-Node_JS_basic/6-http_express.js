const express = require('express');

const app = express();
const port = 1745;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
}); // <- Add closing parenthesis here

app.listen(port);

module.exports = app;
