// Import required modules
const http = require('http');
const countStudents = require('./3-read_file_async');

// Retrieve database name from command line
const [,, DATABASE] = process.argv;

// Create server
const app = http.createServer(async (req, res) => {
  // Response header info
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  // Request url
  const { url } = req;

  // Handle paths
  if (url === '/') {
    res.end('Hello Holberton School!');
  } else if (url === '/students') {
    res.write('This is the list of our students\n');
    try {
      const students = await countStudents(DATABASE);
      res.end(`${students.join('\n')}`);
    } catch (error) {
      res.end(error.message);
    }
  }
});

// Assign listening port
app.listen(1245);

// Export server
module.exports = app;
