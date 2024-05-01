// Import fs module
const fs = require('fs');

// Asynchronous file reading
function countStudents(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf-8', (err, data) => {
      if (err) reject(new Error('Cannot load the database'));
      if (data) {
        const students = data.split('\n').filter((item) => item);
        students.shift();
        console.log(`Number of students: ${students.length}`);
        const dict = {};
        students.forEach((line) => {
          const record = line.split(',');
          const key = record[3];
          const value = record[0];
          if (!(key in dict)) {
            dict[key] = [];
          }
          dict[key].push(value);
        });
        for (const key in dict) {
          if (key) {
            process.stdout.write(`Number of students in ${key}: ${dict[key].length}. `);
            process.stdout.write(`List: ${dict[key].join(', ')}\n`);
          }
        }
        resolve('Success!');
      }
    });
  });
}
// Export file
module.exports = countStudents;
