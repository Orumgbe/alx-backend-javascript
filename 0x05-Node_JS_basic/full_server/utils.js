const fs = require('fs');

function readDatabase(filePath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filePath, 'utf-8', (err, data) => {
      if (err) reject(err);
      if (data) {
        const response = {};
        const students = data.split('\n').filter((item) => item);
        students.shift();
        students.forEach((line) => {
          const key = line.split(',')[3];
          const value = line.split(',')[0];
          if (!(key in response)) {
            response[key] = [];
          }
          response[key].push(value);
        });
        resolve(response);
      }
    });
  });
}

module.exports = readDatabase;
