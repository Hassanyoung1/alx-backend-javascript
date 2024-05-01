const express = require('express');
const countStudents = require('./3-read_file_async');

const port = 1845;

const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', async (req, res) => {
  try {
    const data = await countStudents(process.argv[2]);
    const studentsList = data.filter((student) => student !== '').join('\n');
    res.send(`This is the list of our students\n${studentsList}`);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
