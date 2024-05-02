// Importing express
const express = require('express');

// Create app variable
const app = express();

// Set listening port
app.listen(1245);

// Routes
app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

// Exporting app
module.exports = app;
