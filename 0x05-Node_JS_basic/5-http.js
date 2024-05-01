const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

app.get('/', (req, res) => res.send('Hello Holberton School!'));

app.get('/students', async (req, res) => {
  const title = 'This is the list of our students\n';
  try {
    const data = await countStudents(process.argv[2]);
    const studentsList = data.filter(student => student.trim() !== '').join('\n');
    res.send(`${title}${studentsList}`);
  } catch (error) {
    res.status(500).send(`${title}${error.message}`);
  }
});

const PORT = 1245;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));

module.exports = app;
