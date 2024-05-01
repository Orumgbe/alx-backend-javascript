// Importing http module
const http = require('http');

const app = http.createServer((req, res) => {
  // Set reponse http header with HTTP status code and content type
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  // Send response body
  res.end('Hello Holberton School!');
});

// Set listening port
app.listen(1245);

// Export server
module.exports = app;
