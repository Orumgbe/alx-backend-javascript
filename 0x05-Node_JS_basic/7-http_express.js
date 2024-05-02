// Import required modules and create express instance
const express = require('express');
const countStudents = require('./3-read_file_async');

const app = express();

// Retrieve database name from command line
const [,, DATABASE] = process.argv;

// Set listening port
app.listen(1245);

// Root url
app.get('/', (req, res) => {
  res.contentType('text/plain');
  res.send('Hello Holberton School!');
});

// Students url
app.get('/students', async (req, res) => {
  res.contentType('text/plain');
  let nugget = 'This is the list of our students\n';
  try {
    const students = await countStudents(DATABASE);
    nugget += students.join('\n');
    res.send(nugget);
  } catch (error) {
    res.send(nugget + error.message);
  }
});

// Export app
module.exports = app;
