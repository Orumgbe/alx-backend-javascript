class AppController {
  static getHomepage(request, response) {
    // Set status code
    response.status(200);
    // Response message
    response.send('Hello Holberton School!');
  }
}

module.exports = AppController;
